import { AsideItemStyle } from './aside.style';
import { NavLink } from 'react-router-dom';
import { Icon, IconNameT, Typography } from '@juanmsl/ui';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type MenuItemProps = {
  to: string;
  icon: IconNameT;
  label: string;
};

export const MenuItem = ({ to, icon, label }: MenuItemProps) => {
  return (
    <AsideItemStyle variants={variants} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
      <NavLink to={to} className='aside-item'>
        <Icon name={icon} />
        <Typography withoutPadding variant='label'>
          {label}
        </Typography>
      </NavLink>
    </AsideItemStyle>
  );
};
