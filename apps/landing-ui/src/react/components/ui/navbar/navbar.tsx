import { Icon, Image, THEME, Typography, useMyTheme } from '@juanmsl/ui';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { NavbarStyle } from './navbar.style';

import { REDIRECT_URL } from '@core/constants';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { themeName, toggleTheme } = useMyTheme();

  const isEnglish = i18n.languages.includes('en');

  const handleToggle = useCallback(() => {
    if (isEnglish) i18n.changeLanguage('es');
    else i18n.changeLanguage('en');
  }, [i18n, isEnglish]);

  return (
    <NavbarStyle>
      <Link to={REDIRECT_URL} className='navbar-logo-container'>
        <Image className='navbar-logo' src='/assets/images/logo.png' alt='logo' />
        <Typography variant='body' weight='bold'>
          {t('navbar:title')}
        </Typography>
      </Link>
      <section className='navbar-actions'>
        <section className='navbar-language-button'>
          <Typography onClick={handleToggle} variant='small'>
            {isEnglish ? 'En' : 'Es'}
          </Typography>
        </section>
        <section className='navbar-theme-icon'>
          <Icon name={themeName === THEME.LIGHT ? 'sun' : 'moon'} onClick={toggleTheme} />
        </section>
      </section>
    </NavbarStyle>
  );
};
