import { createInstance, i18n } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { Config } from 'next-i18n-router/dist/types';
import { initReactI18next } from 'react-i18next/initReactI18next';

export const i18nConfig: Config = {
  locales: ['en', 'es'],
  defaultLocale: 'en',
  prefixDefault: true,
};

const initTranslations = async (locale: string, i18nInstance?: i18n) => {
  i18nInstance = i18nInstance || createInstance();

  i18nInstance.use(initReactI18next);
  i18nInstance.use(
    resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)),
  );

  await i18nInstance.init({
    lng: locale,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    ns: ['common', 'aside', 'footer', 'metatags', 'navbar'],
    preload: i18nConfig.locales,
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
};

export default initTranslations;
