'use client';

import { useTranslation } from 'react-i18next';

export const Language = () => {
  const { t } = useTranslation();

  return <span>{t('common:language')}</span>;
};
