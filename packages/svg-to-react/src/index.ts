import fs from 'fs';

import { titleCase } from './helpers';
import { Icon, Category } from './core';

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
  categories[icon.category] = categories[icon.category] ?? new Category(icon.category);
  categories[icon.category].addIcon(icon);

  return categories;
}, {});

Object.values(categoryFiles).forEach(async category => {
  await category.createFile(config.outputDirectory);
});

console.log(`Creating file: ${config.outputDirectory}/index.ts`);

const indexFile = `import React from 'react';
${Object.keys(categoryFiles)
  .map(category => `import { ${titleCase(category)}Icons, ${titleCase(category)}IconsT } from './${category}';`)
  .join('\n')}\n
export type IconT = {
  viewBox: string;
  svg: (fill: string) => React.ReactNode;
};\n
export type IconCollectionT = ${Object.keys(categoryFiles)
  .map(category => `${titleCase(category)}IconsT`)
  .join(' & ')};\n
export const Icons: IconCollectionT = {\n${Object.keys(categoryFiles)
  .map(category => `  ...${titleCase(category)}Icons,`)
  .join('\n')}\n};`;

fs.writeFileSync(`${config.outputDirectory}/index.ts`, indexFile);

console.info("SVG's transformed! :D");
