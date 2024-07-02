'use client';

import { createInstance } from 'i18next';
import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';

import initTranslations from '@core/i18n';

type TranslationsProviderProps = {
  children: React.ReactNode;
  locale: string;
};

export const TranslationsProvider = ({ children, locale }: TranslationsProviderProps) => {
  const [i18n] = useState(() => createInstance());
  const [init, setInit] = useState(false);

  useEffect(() => {
    initTranslations(locale, i18n).then(() => {
      setInit(true);
    });
  }, [i18n, locale]);

  if (!init) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
