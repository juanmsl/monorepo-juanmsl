import React, { RefObject, useCallback, useMemo } from 'react';

import { Checkbox } from '../../form';
import { Icon, IconNameT } from '../../icon';
import { InfinityScroll, InfinityScrollProps } from '../../infinity-scroll';
import { Line } from '../../line';
import { Typography, TypographyProps } from '../../typography';
import { ModalProps } from '../modal';

import { MenuLabelStyle, MenuModalStyle, MenuOptionStyle } from './menu.style';

import { useClassNames } from '@polpo/hooks';

type MenuProps = ModalProps & {
  children: React.ReactNode;
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
  menuContentRef?: RefObject<HTMLUListElement>;
};

export const Menu = ({
  children,
  isOpen,
  onClose,
  id,
  menuContentRef,
  contentClassName = '',
  contentStyle = {},
  ...modalProps
}: MenuProps) => {
  return (
    <MenuModalStyle {...modalProps} id={`menu-${id}`} isOpen={isOpen} onClose={onClose}>
      <ul className={`menu-content ${contentClassName}`} role='listbox' style={contentStyle} ref={menuContentRef}>
        {children}
      </ul>
    </MenuModalStyle>
  );
};

export type MenuOptionProps = Omit<React.HTMLAttributes<HTMLLIElement>, 'onClick'> & {
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
  ...liProps
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
      {...liProps}
      id={id}
      role='option'
      tabIndex={-1}
      aria-selected={selected}
      aria-disabled={disabled}
      onClick={handleClick}
      className={menuOptionClassName}
      style={style}
    >
      {menuOptionContent}
    </MenuOptionStyle>
  );
};

Menu.Option = MenuOption;

const MenuDivider = () => {
  return (
    <li>
      <Line className='divider' />
    </li>
  );
};

Menu.Divider = MenuDivider;

type MenuOptionsGroupProps<T> = Partial<InfinityScrollProps<T>> & {
  label?: React.ReactNode;
};

const MenuOptionsGroup = <T,>({ label, children, ...infinityScrollProps }: MenuOptionsGroupProps<T>) => {
  return (
    <>
      {Boolean(label) && <Menu.GroupLabel>{label}</Menu.GroupLabel>}
      <InfinityScroll
        data={infinityScrollProps.data ?? []}
        loadMore={infinityScrollProps.loadMore ?? (() => null)}
        isLoading={infinityScrollProps.isLoading ?? false}
        hasNextPage={infinityScrollProps.hasNextPage ?? false}
        emptyMessage={infinityScrollProps.emptyMessage}
        renderItem={infinityScrollProps.renderItem ?? ((_: T, key: number) => `${key}`)}
      >
        {children}
      </InfinityScroll>
    </>
  );
};

Menu.OptionsGroup = MenuOptionsGroup;

const MenuGroupLabel = ({ children, className = '', ...props }: Omit<TypographyProps, 'variant'>) => {
  return (
    <MenuLabelStyle>
      <Typography {...props} variant='label' className={`menu-group-label ${className}`}>
        {children}
      </Typography>
    </MenuLabelStyle>
  );
};

Menu.GroupLabel = MenuGroupLabel;
