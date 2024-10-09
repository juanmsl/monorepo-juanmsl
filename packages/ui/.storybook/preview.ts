import decorators, { DecoratorGlobalTypes } from './decorators';
import Theme from './theme';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    docs: {
      theme: Theme,
    },
    backgrounds: {
      values: [{ name: 'Theme', value: 'var(--background)' }],
      default: 'Theme',
      dynamicTitle: 'true',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
        boolean: /is('*')$/i,
      },
    },
  },

  globalTypes: {
    ...DecoratorGlobalTypes,
  },

  initialGlobals: {
    theme: 'dark',
  },

  decorators,
  tags: ['autodocs'],
};

export default preview;
