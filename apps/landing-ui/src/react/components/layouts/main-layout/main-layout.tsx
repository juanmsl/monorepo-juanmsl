import { MainLayoutStyle } from './main-layout.style';

import { Aside, Footer, Navbar } from '@components/ui';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <MainLayoutStyle>
      <Navbar />
      <section className='main-layout-container'>
        <Aside />
        <section className='main-layout-content'>
          {children}
          <Footer />
        </section>
      </section>
    </MainLayoutStyle>
  );
};
