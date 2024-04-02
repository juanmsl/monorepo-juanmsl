import { useTranslation } from 'react-i18next';

import { SectionLayout } from '@components/layouts';
import { Header } from '@components/ui';

export const Blog = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t('blog:title')} />
      <SectionLayout>hola</SectionLayout>
    </>
  );
};
