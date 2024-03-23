import { Header } from '@components/ui';
import { SectionLayout } from '@components/layouts';
import { useTranslation } from 'react-i18next';

export const Blog = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t('blog:title')} />
      <SectionLayout>hola</SectionLayout>
    </>
  );
};
