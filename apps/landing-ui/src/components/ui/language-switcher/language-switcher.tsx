'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { i18nConfig } from '@core/i18n';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [count, setCount] = useState(0);

  const handleChange = e => {
    setCount(prev => prev + 1);
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 7;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  return (
    <span>
      <span>{count}</span>
      <select onChange={handleChange} value={currentLocale}>
        <option value='en'>English</option>
        <option value='es'>Spanish</option>
      </select>
    </span>
  );
};
