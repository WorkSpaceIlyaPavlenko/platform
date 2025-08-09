// src/shared/api/axiosBaseQuery.ts
import axios, { type AxiosResponse } from "axios";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import Cookies from "js-cookie";

export type AxiosBaseQueryArgs = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  // тело запроса и params делаем типобезопасными без any
  data?: unknown;
  params?:
    | Record<string, string | number | boolean | null | undefined>
    | URLSearchParams;
  withAuth?: boolean;
};

type AxiosBaseQueryError = {
  status?: number;
  data?: unknown;
  message?: string;
};

// Ответ /auth/refresh-token
type RefreshResponse = {
  accessToken?: string;
};

export const axiosBaseQuery =
  ({ baseUrl = "" }: { baseUrl?: string } = {}): BaseQueryFn<
    AxiosBaseQueryArgs,
    unknown,
    AxiosBaseQueryError
  > =>
  async ({ url, method = "GET", data, params, withAuth = true }) => {
    try {
      const headers: Record<string, string> = {};

      if (withAuth) {
        const token = Cookies.get("accessToken");
        if (token) headers.Authorization = `Bearer ${token}`;
      }

      // Явно укажем дженерики у axios.request:
      // <T=unknown, R=AxiosResponse<T>, D=unknown>
      const res = await axios.request<unknown, AxiosResponse<unknown>, unknown>({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
        withCredentials: true,
      });

      return { data: res.data };
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const status = err.response?.status;

        // 401 → пытаемся обновить токен
        if (status === 401 && withAuth) {
          try {
            const refresh = await axios.post<RefreshResponse>(
              `${baseUrl}/auth/refresh-token`,
              {},
              { withCredentials: true }
            );

            const newAccessToken = refresh.data.accessToken;

            if (newAccessToken) {
              Cookies.set("accessToken", newAccessToken, {
                expires: 7,
                path: "/",
              });

              const retry = await axios.request<
                unknown,
                AxiosResponse<unknown>,
                unknown
              >({
                url: baseUrl + url,
                method,
                data,
                params,
                headers: { Authorization: `Bearer ${newAccessToken}` },
                withCredentials: true,
              });

              return { data: retry.data };
            }

            // refresh не вернул токен
            Cookies.remove("accessToken");
            Cookies.remove("refreshToken");
            Cookies.remove("role");
            Cookies.remove("id");
            return { error: { status: 401, data: "Unauthorized" } };
          } catch (refreshErr: unknown) {
            const msg = axios.isAxiosError(refreshErr)
              ? refreshErr.response?.data ?? refreshErr.message
              : "Refresh failed";

            Cookies.remove("accessToken");
            Cookies.remove("refreshToken");
            Cookies.remove("role");
            Cookies.remove("id");
            return { error: { status: 401, data: msg, message: "Unauthorized" } };
          }
        }

        // Другая axios-ошибка
        return {
          error: {
            status,
            data: err.response?.data ?? null,
            message: err.message,
          },
        };
      }

      // Не-axios ошибка
      return {
        error: {
          status: 500,
          data: null,
          message: String(err),
        },
      };
    }
  };
