import { Image, Typography } from '@juanmsl/ui';
import { useTranslation } from 'react-i18next';

import { NavbarStyle } from './navbar.style';

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <NavbarStyle>
      <a href='https://juanmsl.com' className='portfolio-link' target='_blank' rel='noopener noreferrer'>
        <Image className='navbar-logo' src='/assets/images/logo.png' alt='logo' />
      </a>
      <Typography variant='body' weight='bold'>
        {t('navbar:title')}
      </Typography>
    </NavbarStyle>
  );
};
