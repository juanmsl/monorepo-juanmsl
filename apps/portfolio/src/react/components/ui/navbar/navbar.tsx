import { NavLink } from 'react-router-dom';
import { NavbarStyle } from './navbar.style';
import { PATHS } from '@core/constants';
import { Typography } from '@juanmsl/ui';

export const Navbar = () => {
  return (
    <NavbarStyle>
      <NavLink to={PATHS.HOME_URL} caseSensitive className='navbar-item'>
        <Typography variant='label'>Home</Typography>
      </NavLink>
      <NavLink to={PATHS.RESUME_URL} className='navbar-item'>
        <Typography variant='label'>Resume</Typography>
      </NavLink>
    </NavbarStyle>
  );
};
