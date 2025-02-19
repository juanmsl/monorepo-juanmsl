import { join, dirname } from 'path';

import type { StorybookConfig } from '@storybook/react-vite';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    {
      directory: '../src/components',
      titlePrefix: 'Components',
      files: '**/*.@(mdx|stories.@(mdx|js|jsx|mjs|ts|tsx))',
    },
    {
      directory: '../src/hooks',
      titlePrefix: 'Hooks',
      files: '**/*.@(mdx|stories.@(mdx|js|jsx|mjs|ts|tsx))',
    },
    {
      directory: '../src/layouts',
      titlePrefix: 'Layouts',
      files: '**/*.@(mdx|stories.@(mdx|js|jsx|mjs|ts|tsx))',
    },
  ],

  addons: [
    {
      name: getAbsolutePath('@storybook/addon-essentials'),
      options: {
        actions: false,
      },
    },
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
