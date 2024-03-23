import { Header } from '@components/ui';
import { SectionLayout } from '@components/layouts';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t('projects:title')} />
      <SectionLayout>hola</SectionLayout>
    </>
  );
};
