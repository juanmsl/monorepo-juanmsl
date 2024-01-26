import i18next, {InitOptions} from 'i18next';
import Backend from 'i18next-http-backend';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import moment from "moment/moment";
import 'moment/locale/es.js';

/*
* [supportedLngs] -> Here should be only the locales already supported in the locales folder
*
* Depends on [load] parameter
*
* [load = currentOnly]
* [supportedLngs = ["en", "es", "es-CO"]]
* If language detected is 'es-CO', then i18n.languages would be ['es-CO']
*
* [load = languageOnly]
* [supportedLngs = ["en", "es", "es-CO"]]
* If language detected is 'es-CO', then i18n.languages would be ['es']
*
* [load = all]
* [supportedLngs = ["en", "es", "es-CO"]]
* If language detected is 'es-CO', then i18n.languages would be ['es', 'es-CO']
*
* So if you want to support single root language you could configure as this
*
* [load = languageOnly]
* [supportedLngs = ["en", "es"]]
* If language detected is 'es-CO', then i18n.languages would be ['es']
* If language detected is 'es-ES', then i18n.languages would be ['es']
* If language detected is 'en-US', then i18n.languages would be ['en']
*/

const i18nConfig: InitOptions = {
  load: "languageOnly",
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

i18next.on('languageChanged', (lng) => {
  moment.locale(lng);
});

export const i18n = i18next
  .use(Backend)
  .use(detector)
  .use(initReactI18next)
  .init(i18nConfig);

