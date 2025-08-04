import type { AxiosBaseQueryArgs } from "./type";
import axios from "axios";
import Cookies from "js-cookie";

export const axiosBaseQuery =
  ({ baseUrl = '' }: { baseUrl?: string } = {}) =>
  async ({ url, method, data, params, withAuth = true }: AxiosBaseQueryArgs) => {
    try {
      const headers: Record<string, string> = {};

      if (withAuth) {
        const token = Cookies.get('accessToken');
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
      }

      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
        withCredentials: true,
      });

      return { data: result.data };
    } catch (error: any) {
      const status = error.response?.status;

      if (status === 401 && withAuth) {
        console.warn('⏳ Токен устарел, пробуем обновить...');

        try {
          // 1. Пробуем обновить токен
          const refreshResponse = await axios.post(
            `${baseUrl}/auth/refresh-token`,
            {},
            { withCredentials: true }
          );

          const newAccessToken = refreshResponse.data.accessToken;

          if (newAccessToken) {
            console.log('✅ Новый токен получен, повтор запроса...');
            Cookies.set('accessToken', newAccessToken, { expires: 7, path: '/' });

            // 2. Повторяем оригинальный запрос с новым токеном
            const retryHeaders: Record<string, string> = { Authorization: `Bearer ${newAccessToken}` };

            const retryResult = await axios({
              url: baseUrl + url,
              method,
              data,
              params,
              headers: retryHeaders,
              withCredentials: true,
            });

            return { data: retryResult.data };
          }
        } catch (refreshError) {
          console.error('❌ Ошибка обновления токена, выполняем логаут...', refreshError);

          // 3. Если обновление токена не получилось — удаляем куки
          Cookies.remove('accessToken');
          Cookies.remove('refreshToken');
          Cookies.remove('role');
          Cookies.remove('id');

          return { error: { status: 401, data: 'Unauthorized' } };
        }
      }

      return {
        error: {
          status,
          data: error.response?.data || error.message,
        },
      };
    }
  };
