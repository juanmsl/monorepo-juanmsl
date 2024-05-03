import { Image, Typography } from '@juanmsl/ui';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { NavbarStyle } from './navbar.style';

import { PATHS } from '@core/constants';

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <NavbarStyle>
      <Link to={PATHS.HOME_URL} className='navbar-left'>
        <Image className='navbar-logo' src='/assets/images/logo.png' alt='logo' />
        <Typography variant='body' weight='bold' className='navbar-title'>
          {t('navbar:title')}
        </Typography>
      </Link>
    </NavbarStyle>
  );
};
