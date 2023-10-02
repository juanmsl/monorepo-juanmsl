import React from 'react';
import { FileTypeIcons, FileTypeIconsT } from './file-types';
import { ObjectIcons, ObjectIconsT } from './objects';
import { SymbolIcons, SymbolIconsT } from './symbols';
import { UtilityIcons, UtilityIconsT } from './utility';
import {BrandIcons, BrandIconsT} from "./brands";

export type IconT = {
  viewBox: string;
  svg: (fill: string) => React.ReactNode;
};

export type IconCollectionT = BrandIconsT & FileTypeIconsT & ObjectIconsT & SymbolIconsT & UtilityIconsT;

export const Icons: IconCollectionT = {
  ...BrandIcons,
  ...FileTypeIcons,
  ...ObjectIcons,
  ...SymbolIcons,
  ...UtilityIcons,
};
