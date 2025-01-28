import { ForwardedRef, forwardRef } from 'react';

import { SectionLayoutContentStyle, SectionLayoutStyle } from './section-layout.style';

import { useClassNames } from '@polpo/hooks';

type SectionLayoutProps = {
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  style?: React.CSSProperties;
  padding?: string;
  fitHeightContent?: boolean;
  alignContent?: React.CSSProperties['alignContent'];
};

const SectionLayoutComponent = (
  {
    children,
    className = '',
    contentClassName = '',
    style = {},
    padding = '0 2em',
    fitHeightContent = false,
    alignContent = 'center',
  }: SectionLayoutProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const sectionLayoutContentClassName = useClassNames({
    [contentClassName]: Boolean(contentClassName),
    'section-layout-min-height': !fitHeightContent,
  });

  return (
    <SectionLayoutStyle ref={ref} className={className} style={style} $padding={padding}>
      <SectionLayoutContentStyle
        className={sectionLayoutContentClassName}
        style={{ alignContent: (!fitHeightContent && alignContent) || undefined }}
      >
        {children}
      </SectionLayoutContentStyle>
    </SectionLayoutStyle>
  );
};

export const SectionLayout = forwardRef(SectionLayoutComponent);
