import { useTranslation } from 'react-i18next';

import { SectionLayout } from '@components/layouts';
import { Document } from '@components/modules';
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
