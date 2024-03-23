import { Document } from '@components/modules';
import { Header } from '@components/ui';
import { SectionLayout } from '@components/layouts';
import { useTranslation } from 'react-i18next';

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
