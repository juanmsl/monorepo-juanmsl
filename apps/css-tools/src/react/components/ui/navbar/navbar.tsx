import { Icon, Image, Tooltip, Typography } from '@juanmsl/ui';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';

import { NavbarStyle } from './navbar.style';

import { PATHS } from '@core/constants';

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <NavbarStyle>
      <Link to={PATHS.HOME_URL} className='navbar-top'>
        <Image className='navbar-logo' src='/assets/images/logo.png' alt='logo' />
        <Typography variant='body' weight='bold' className='navbar-title'>
          {t('navbar:title')}
        </Typography>
      </Link>
      <section className='navbar-options'>
        <Tooltip position='right' content='Home'>
          <NavLink className='navbar-options--link' to={PATHS.HOME_URL}>
            <Icon name='house' />
          </NavLink>
        </Tooltip>
        <Tooltip position='right' content='box-shadow'>
          <NavLink className='navbar-options--link' to={PATHS.BOX_SHADOW_URL}>
            <Icon name='box-shadow' />
          </NavLink>
        </Tooltip>
        <Tooltip position='right' content='text-shadow'>
          <NavLink className='navbar-options--link' to={PATHS.TEXT_SHADOW_URL}>
            <Icon name='text-shadow' />
          </NavLink>
        </Tooltip>
      </section>
    </NavbarStyle>
  );
};
