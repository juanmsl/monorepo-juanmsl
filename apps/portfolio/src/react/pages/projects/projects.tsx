import { useTranslation } from 'react-i18next';

import { SectionLayout } from '@components/layouts';
import { Header } from '@components/ui';

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t('projects:title')} />
      <SectionLayout>hola</SectionLayout>
    </>
  );
};
