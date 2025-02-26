#!/usr/bin/env node

import fs from 'fs';

import { Category, Icon } from "./core";
import { titleCase } from "./helpers";


type ConfigFile = {
  rootSVGDirectory: string;
  outputDirectory: string;
};

const configFile = fs.readFileSync('svgconfig.json', 'utf8');
const config: ConfigFile = JSON.parse(configFile);

const icons: Array<Icon> = fs
  .readdirSync(config.rootSVGDirectory)
  .filter(file => file.endsWith('.svg'))
  .map<Icon>(file => new Icon(config.rootSVGDirectory, file));

type IconCategories = {
  [index: string]: Category;
};

const categoryFiles = icons.reduce<IconCategories>((categories, icon) => {
  if(icon.category) {
    categories[icon.category] = categories[icon.category] ?? new Category(icon.category);
    categories[icon.category].addIcon(icon);
  }

  return categories;
}, {});

Object.values(categoryFiles).forEach(async category => {
  await category.createFile(config.outputDirectory);
});

console.log(`Creating file: ${config.outputDirectory}/index.ts`);

const categories = Object.keys(categoryFiles).sort();

const importCategpries = categories.map(
  category => `import { ${titleCase(category)}Icons, ${titleCase(category)}IconsT } from './${category}';`
).join('\n');

const iconCollectionT = categories.map(
  category => `${titleCase(category)}IconsT`
).join(' & ')

const exportIcons = categories.map(
  category => `  ...${titleCase(category)}Icons,`
).join('\n')

const indexFile = `import React from 'react';

${importCategpries}

export type IconT = {
  viewBox: string;
  svg: (fill: string) => React.ReactNode;
};

export type IconCollectionT = ${iconCollectionT};

export const Icons: IconCollectionT = {
${exportIcons}
};
`;

fs.writeFileSync(`${config.outputDirectory}/index.ts`, indexFile);

console.info("SVG's transformed! :D");
