import i18next, {InitOptions} from 'i18next';
import Backend from 'i18next-http-backend';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


const i18nConfig: InitOptions = {
  load: "currentOnly",
  supportedLngs: ["en", "es"],
  ns: [
    'common',
    'footer',
    'home',
    'utility',
  ],
  interpolation: {
    escapeValue: false
  },
}

export const i18n = i18next
  .use(Backend)
  .use(detector)
  .use(initReactI18next)
  .init(i18nConfig);
