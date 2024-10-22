import { SectionLayout } from '@juanmsl/ui';
import { useTranslation } from 'react-i18next';

import { Document } from './components';

import { Header } from '@components/ui';

export const Resume = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t('resume:title')} />
      <SectionLayout>
        <Document />
      </SectionLayout>
    </>
  );
};
