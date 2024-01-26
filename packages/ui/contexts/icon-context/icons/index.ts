import React from 'react';
import { SymbolIcons, SymbolIconsT } from './symbol';
import { SocialIcons, SocialIconsT } from './social';
import { ObjectIcons, ObjectIconsT } from './object';

export type IconT = {
  viewBox: string;
  svg: (fill: string) => React.ReactNode;
};

export type IconCollectionT = SymbolIconsT & SocialIconsT & ObjectIconsT;

export const Icons: IconCollectionT = {
  ...SymbolIcons,
  ...SocialIcons,
  ...ObjectIcons,
};