// // === /src/shared/lib/cookie.ts ===

// import { cookies } from 'next/headers';

// /** Установить куку с языком */
// export const createCookie = (name: string, value: string, options?: { maxAge?: number }) => {
//   const cookieStore = cookies();
//   cookieStore.set({
//     name,
//     value,
//     path: '/',
//     maxAge: options?.maxAge || 60 * 60 * 24 * 365, // по умолчанию 1 год
//   });
// };

// /** Удалить куку по имени */
// export const deleteCookie = (name: string) => {
//   const cookieStore = cookies();
//   cookieStore.delete(name);
// };

// /** Найти значение куки по имени */
// export const findCookie = (name: string): string | undefined => {
//   const cookieStore = cookies();
//   const cookie = cookieStore.get(name);
//   return cookie?.value;
// };
