import { MainLayout } from '@components/layouts';
import { TranslationsProvider } from '@components/providers';
import { PageWithParams } from '@core/entities';

type RootLayoutProps = PageWithParams<{
  children: React.ReactNode;
  content: React.ReactNode;
}>;

const Layout = ({ content, params: { lang } }: RootLayoutProps) => {
  return (
    <TranslationsProvider locale={lang}>
      <MainLayout>{content}</MainLayout>
    </TranslationsProvider>
  );
};

export default Layout;
