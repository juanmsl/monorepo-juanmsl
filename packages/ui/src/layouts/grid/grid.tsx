import React, { createElement } from 'react';

type GridProps = {
  tag?: keyof React.ReactHTML;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  flow?: React.CSSProperties['gridAutoFlow'];
  columnSize?: React.CSSProperties['gridAutoColumns'];
  rowSize?: React.CSSProperties['gridAutoRows'];
  pc?: React.CSSProperties['placeContent'];
  pi?: React.CSSProperties['placeItems'];
  ps?: React.CSSProperties['placeSelf'];
  jc?: React.CSSProperties['justifyContent'];
  ji?: React.CSSProperties['justifyItems'];
  js?: React.CSSProperties['justifySelf'];
  ac?: React.CSSProperties['alignContent'];
  ai?: React.CSSProperties['alignItems'];
  as?: React.CSSProperties['alignSelf'];
  gtc?: React.CSSProperties['gridTemplateColumns'];
  gtr?: React.CSSProperties['gridTemplateRows'];
  gta?: React.CSSProperties['gridTemplateAreas'];
  gt?: React.CSSProperties['gridTemplate'];
  gap?: React.CSSProperties['gap'];
};

export const Grid = ({
  tag = 'section',
  children,
  className,
  style,
  flow,
  columnSize,
  rowSize,
  pc,
  pi,
  ps,
  jc,
  ji,
  js,
  ac,
  ai,
  as,
  gtc,
  gtr,
  gta,
  gt,
  gap,
}: GridProps) => {
  return createElement(
    tag,
    {
      className,
      style: {
        ...style,
        ...(flow ? { gridAutoFlow: flow } : {}),
        ...(columnSize ? { gridAutoColumns: columnSize } : {}),
        ...(rowSize ? { gridAutoRows: rowSize } : {}),
        ...(pc ? { placeContent: pc } : {}),
        ...(pi ? { placeItems: pi } : {}),
        ...(ps ? { placeSelf: ps } : {}),
        ...(jc ? { justifyContent: jc } : {}),
        ...(ji ? { justifyItems: ji } : {}),
        ...(js ? { justifySelf: js } : {}),
        ...(ac ? { alignContent: ac } : {}),
        ...(ai ? { alignItems: ai } : {}),
        ...(as ? { alignSelf: as } : {}),
        ...(gtc ? { gridTemplateColumns: gtc } : {}),
        ...(gtr ? { gridTemplateRows: gtr } : {}),
        ...(gta ? { gridTemplateAreas: gta } : {}),
        ...(gt ? { gridTemplate: gt } : {}),
        ...(gap ? { gap: gap } : {}),
        display: 'grid',
      },
    },
    children,
  );
};
