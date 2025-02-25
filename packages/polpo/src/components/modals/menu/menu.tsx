import React, { useCallback, useMemo } from 'react';

import { MenuModalStyle, MenuOptionStyle } from './menu.style';

import { useClassNames } from '@polpo/hooks';
import {
  Checkbox,
  Icon,
  IconNameT,
  InfinityScroll,
  InfinityScrollProps,
  Line,
  ModalProps,
  Typography,
} from '@polpo/ui';

export type MenuOptionProps = {
  id?: string;
  children?: React.ReactNode;
  label?: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
  style?: React.CSSProperties;
  asCheckbox?: boolean;
  icon?: IconNameT;
  onClick?: (newValue: boolean) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
};

const MenuOption = ({
  children,
  label = '',
  asCheckbox,
  icon,
  id,
  disabled = false,
  selected = false,
  className = '',
  style = {},
  onClick = () => null,
  onKeyDown = () => null,
}: MenuOptionProps) => {
  const menuOptionClassName = useClassNames({
    [className]: true,
    'is-disabled': disabled,
    'is-selected': selected,
  });

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();

      if (!disabled) {
        onClick(!selected);
      }
    },
    [disabled, onClick, selected],
  );

  const menuOptionContent = useMemo(() => {
    if (children) {
      return children;
    }

    if (asCheckbox) {
      return (
        <Checkbox
          className='menu-checkbox'
          disabled={disabled}
          value={selected}
          setValue={n => onClick(n)}
          name='option'
          label={
            <>
              {icon !== undefined && <Icon className='option-icon' name={icon} />}
              <Typography variant='label'>{label}</Typography>
            </>
          }
        />
      );
    }

    return (
      <>
        {icon !== undefined && <Icon className='option-icon' name={icon} />}
        <Typography variant='label'>{label}</Typography>
      </>
    );
  }, [asCheckbox, children, disabled, icon, label, onClick, selected]);

  return (
    <MenuOptionStyle
      id={id}
      role='option'
      tabIndex={-1}
      aria-selected={selected}
      aria-disabled={disabled}
      onClick={handleClick}
      onKeyDown={onKeyDown}
      className={menuOptionClassName}
      style={style}
    >
      {menuOptionContent}
    </MenuOptionStyle>
  );
};

type MenuProps = ModalProps & {
  children: React.ReactNode;
};

export const Menu = ({ children, isOpen, onClose, id, ...modalProps }: MenuProps) => {
  return (
    <MenuModalStyle {...modalProps} id={`menu-${id}`} isOpen={isOpen} onClose={onClose}>
      {children}
    </MenuModalStyle>
  );
};

Menu.Option = MenuOption;

const MenuDivider = () => {
  return <Line className='divider' />;
};

Menu.Divider = MenuDivider;

type MenuOptionsGroupProps<T> = InfinityScrollProps<T> & {
  className?: string;
  style?: React.CSSProperties;
};

const MenuOptionsGroup = <T,>({ className = '', style = {}, ...infinityScrollProps }: MenuOptionsGroupProps<T>) => {
  return (
    <ul className={`menu-content ${className}`} role='listbox' style={style}>
      <InfinityScroll {...infinityScrollProps} />
    </ul>
  );
};

Menu.OptionsGroup = MenuOptionsGroup;
