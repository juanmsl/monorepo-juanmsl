import decorators, { DecoratorGlobalTypes } from './decorators';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    layout: 'centered',
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
    theme: 'light',
  },
  decorators,
};

export default preview;
