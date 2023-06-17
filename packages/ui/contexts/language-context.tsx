import i18next, { InitOptions, Resource } from 'i18next';
import detector from 'i18next-browser-languagedetector';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';

type LanguageContextT = {
  languages: Array<string>;
};

const LanguageContext = createContext<LanguageContextT | null>(null);

type LanguageProviderProps<T extends Resource> = {
  children: React.ReactNode;
  lng?: string;
  lngResources: T;
  options?: Omit<InitOptions, 'fallbackLng' | 'resources' | 'debug'>;
};

export const LanguageProvider = <T extends Resource>({
  children,
  lng,
  lngResources,
  options = {},
}: LanguageProviderProps<T>): React.ReactElement => {
  const [initialized, setInitialized] = useState(false);

  const languages = useMemo(() => Object.keys(lngResources), [lngResources]);

  useEffect(() => {
    if (!i18next.isInitialized) {
      i18next
        .use(detector)
        .use(initReactI18next)
        .init({
          fallbackLng: lng,
          debug: process.env.NODE_ENV === 'development',
          resources: lngResources,
          interpolation: {
            prefix: '{',
            suffix: '}',
          },
          ...options,
        })
        .then(() => {
          setInitialized(true);
        });
    }
  }, [lngResources, lng, options]);

  return (
    <LanguageContext.Provider
      value={{
        languages,
      }}
    >
      {initialized ? <I18nextProvider i18n={i18next}>{children}</I18nextProvider> : null}
    </LanguageContext.Provider>
  );
};

export const useLanguages = (): LanguageContextT => {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error('useLanguages must be used with in a LanguageProvider');
  }

  return context;
};
