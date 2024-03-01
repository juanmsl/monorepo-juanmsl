import { AsideContentStyle } from './aside.style';
import { MenuItem } from './menu-item';
import { NavLink } from 'react-router-dom';
import { PATHS } from '@core/constants';
import { SocialIcons } from '@components/ui';
import { useTranslation } from 'react-i18next';
import { Button, IconNameT, Line } from '@juanmsl/ui';
import { useAsset, useGetNavbarOptions } from '@hooks';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => {
  const { t } = useTranslation();
  const { data: resume } = useAsset('2Sb2cM6MN8osN8kXMizuUd');
  const { data: navbarOptions = [] } = useGetNavbarOptions();

  const handleClick = async () => {
    window.open(resume.url, '_blank');
  };

  return (
    <AsideContentStyle variants={variants}>
      <NavLink to={PATHS.HOME_URL}>
        <img loading='lazy' className='aside-logo' src='/assets/images/logo.png' alt='logo' />
      </NavLink>
      <section className='aside-items'>
        {navbarOptions.map(({ label, page, icon }) => (
          <MenuItem key={page} to={page} icon={icon as IconNameT} label={label} />
        ))}
      </section>
      <footer className='aside-footer'>
        <Button leftIcon='envelope' onClick={handleClick}>
          {t('home:aboutMe.button1')}
        </Button>
        <Line orientation='horizontal' />
        <SocialIcons position='top' gap='5px' />
      </footer>
    </AsideContentStyle>
  );
};
