import React from 'react';
import { ObjectIcons, ObjectIconsT } from './object';
import { SocialIcons, SocialIconsT } from './social';
import { SymbolIcons, SymbolIconsT } from './symbol';

export type IconT = {
  viewBox: string;
  svg: (fill: string) => React.ReactNode;
};

export type IconCollectionT = ObjectIconsT & SymbolIconsT & SocialIconsT;

export const Icons: IconCollectionT = {
  ...ObjectIcons,
  ...SymbolIcons,
  ...SocialIcons,
};
