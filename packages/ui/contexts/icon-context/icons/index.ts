import React from 'react';
import { SymbolIcons, SymbolIconsT } from './symbol';
import { ObjectIcons, ObjectIconsT } from './object';
import { SocialIcons, SocialIconsT } from './social';

export type IconT = {
  viewBox: string;
  svg: (fill: string) => React.ReactNode;
};

export type IconCollectionT = SymbolIconsT & ObjectIconsT & SocialIconsT;

export const Icons: IconCollectionT = {
  ...SymbolIcons,
  ...ObjectIcons,
  ...SocialIcons,
};