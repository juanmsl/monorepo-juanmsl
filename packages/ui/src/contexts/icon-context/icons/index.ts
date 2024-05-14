import React from 'react';

import { ObjectIcons, ObjectIconsT } from './object';
import { SocialIcons, SocialIconsT } from './social';
import { SymbolIcons, SymbolIconsT } from './symbol';

export type IconT = {
  viewBox: string;
  svg: (fill: string) => React.ReactNode;
};

export type IconCollectionT = ObjectIconsT & SocialIconsT & SymbolIconsT;

export const Icons: IconCollectionT = {
  ...ObjectIcons,
  ...SocialIcons,
  ...SymbolIcons,
};
