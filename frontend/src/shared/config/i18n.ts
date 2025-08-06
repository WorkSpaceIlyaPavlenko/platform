import i18n from 'i18next'
import Backend from 'i18next-fs-backend'
import { initReactI18next } from 'react-i18next'
import path from 'path'

export const initI18nextServer = async (lng: string, ns: string[]) => {
  await i18n
    .use(initReactI18next)
    .use(Backend)
    .init({
      lng,
      fallbackLng: 'en',
      ns,
      defaultNS: ns[0],
      backend: {
        loadPath: path.resolve('locales/{{lng}}/{{ns}}.json'),
      },
    })

  return i18n
}
