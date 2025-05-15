import { useModal } from 'polpo/hooks';
import { Icon, Image, Line, Tooltip, Typography } from 'polpo/ui';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';

import { NavbarStyle, NavbarSuggestionsModal } from './navbar.style';

import { PATHS } from '@core/constants';

export const Navbar = () => {
  const { t } = useTranslation();
  const { openModal, containerRef, closeModal, isOpen } = useModal();

  return (
    <NavbarStyle>
      <section className='navbar-top'>
        <Link to={PATHS.HOME_URL} className='navbar-logo-container'>
          <Image className='navbar-logo' src='/assets/images/logo.png' alt='logo' />
          <Typography variant='body' weight='bold' className='navbar-title'>
            {t('navbar:title')}
          </Typography>
        </Link>
        <section className='navbar-options'>
          <Tooltip position='right' content='Home' offset='10'>
            <NavLink className='navbar-options--link' to={PATHS.HOME_URL}>
              <Icon name='house' />
            </NavLink>
          </Tooltip>
          <Line orientation='horizontal' />
          <Tooltip position='right' content='box-shadow' offset='10'>
            <NavLink className='navbar-options--link' to={PATHS.BOX_SHADOW_URL}>
              <Icon name='box-shadow' />
            </NavLink>
          </Tooltip>
          <Tooltip position='right' content='text-shadow' offset='10'>
            <NavLink className='navbar-options--link' to={PATHS.TEXT_SHADOW_URL}>
              <Icon name='text-shadow' />
            </NavLink>
          </Tooltip>
          <Tooltip position='right' content='gradients' offset='10'>
            <NavLink className='navbar-options--link' to={PATHS.GRADIENTS_URL}>
              <Icon name='gradient-1' />
            </NavLink>
          </Tooltip>
        </section>
      </section>
      <section className='section-bottom'>
        <Line orientation='horizontal' />
        <Tooltip position='right' content='Share your opinion here!' offset='10'>
          <span className='modal-suggestions-trigger' onClick={openModal}>
            <Icon name='cv' />
          </span>
        </Tooltip>
      </section>

      <NavbarSuggestionsModal
        isOpen={isOpen}
        onClose={closeModal}
        containerRef={containerRef}
        transitionDuration={300}
        opacity={0.5}
        backdrop='opaque'
        backdropOnClick={closeModal}
        id='navbar-suggestions'
        position='center'
      >
        <iframe
          className='modal-iframe'
          src='https://docs.google.com/forms/d/e/1FAIpQLSfl0_MGEclyW63dI7PqkwKYR9DqdgxnSdv2hjkY0wUktiSbbw/viewform?embedded=true'
        />
      </NavbarSuggestionsModal>
    </NavbarStyle>
  );
};
