import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

import { ThemeColor } from '../../contexts';
import { RadiusVariants, SizeVariants, useRadiusClassName, useSizeClassName } from '../../core/variants';

import { Tabs } from './tabs';
import { TabListStyle, TabListStyleProps } from './tabs.style';

import { useClassNames } from '@polpo/hooks';

const DefaultRect = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
};

export enum TabListVariant {
  SOLID = 'solid',
  GHOST = 'ghost',
  FLAT = 'flat',
  LINE = 'line',
}

export enum TabListColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

export enum TabListDirection {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

const getColor = (color?: ThemeColor): TabListStyleProps | null => {
  if (color) {
    return {
      $color: color.main,
      $colorContrast: color.contrast,
    };
  }

  return null;
};

export type TabListProps = {
  openTab: string;
  variant?: `${TabListVariant}`;
  children?: React.ReactNode;
  size?: `${SizeVariants}`;
  color?: `${TabListColor}`;
  radius?: `${RadiusVariants}`;
  direction?: `${TabListDirection}`;
  className?: string;
  style?: React.CSSProperties;
  tabs?: Array<{
    id: string;
    label: React.ReactNode;
  }>;
};

export const TabsList = ({
  tabs = [],
  variant = TabListVariant.SOLID,
  radius = RadiusVariants.Full,
  direction = TabListDirection.HORIZONTAL,
  color,
  children,
  openTab,
  size = SizeVariants.Medium,
  className = '',
  style = {},
}: TabListProps) => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedTabRef = useRef<HTMLSpanElement>(null);
  const [isSelectorActive, setIsSelectorActive] = useState(false);
  const [selector, setSelector] = useState(DefaultRect);
  const tabRadius = useRadiusClassName(radius);
  const tabSize = useSizeClassName(size);
  const containerClassNames = useClassNames({
    [tabRadius]: true,
    [tabSize]: true,
    'solid-variant': variant === TabListVariant.SOLID,
    'ghost-variant': variant === TabListVariant.GHOST,
    'flat-variant': variant === TabListVariant.FLAT,
    'line-variant': variant === TabListVariant.LINE,
    'vertical-direction': direction === TabListDirection.VERTICAL,
    [className]: Boolean(className),
  });

  useEffect(() => {
    const selectedRect = selectedTabRef.current?.getBoundingClientRect() ?? DefaultRect;
    const containerRect = containerRef.current?.getBoundingClientRect() ?? DefaultRect;

    const width = selectedRect.width;
    const height = variant === TabListVariant.LINE ? 2 : selectedRect.height;
    const left = selectedRect.left - containerRect.left;
    const top =
      variant === TabListVariant.LINE
        ? selectedRect.top + selectedRect.height - containerRect.top
        : selectedRect.top - containerRect.top;

    setSelector({ left, top, width, height });

    if (!isSelectorActive) {
      setTimeout(() => {
        setIsSelectorActive(true);
      }, 100);
    }
  }, [isSelectorActive, variant, openTab]);

  const containerColors: TabListStyleProps = (color && getColor(theme.colors[color])) || {
    $color: theme.colors.text.main,
    $colorContrast: theme.colors.background.main,
  };

  return (
    <TabListStyle {...containerColors} className={containerClassNames} ref={containerRef} style={style}>
      {Boolean(variant) && <span className={`tabs-selector ${isSelectorActive ? 'active' : ''}`} style={selector} />}
      {tabs.map(({ id, label }) => (
        <Tabs.Tab key={id} id={id} ref={id === openTab ? selectedTabRef : null}>
          {label}
        </Tabs.Tab>
      ))}
      {children}
    </TabListStyle>
  );
};
