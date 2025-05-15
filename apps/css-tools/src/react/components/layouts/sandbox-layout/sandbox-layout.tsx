import { Outlet } from 'react-router-dom';

import { SandboxLayoutStyle } from '@components/layouts/sandbox-layout/sandbox-layout.style';
import { Navbar } from '@components/ui';

export const SandboxLayout = () => {
  return (
    <SandboxLayoutStyle>
      <Navbar />
      <section className='sandbox-layout-content'>
        <Outlet />
      </section>
    </SandboxLayoutStyle>
  );
};
