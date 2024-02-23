import { Preview } from '@storybook/react';
import { IconProvider, ThemeProvider } from '@juanmsl/ui';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const AppDecorator = Story => {
  return (
    <ThemeProvider lightTheme={{}} darkTheme={{}} constants={{}}>
      <IconProvider>
        <Story />
      </IconProvider>
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [AppDecorator],
  parameters: {
    backgrounds: {
      values: [
        { name: 'White', value: '#FFFFFF' },
        { name: 'Black', value: '#555555' },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '420px',
            height: '600px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '810px',
            height: '1080px',
          },
        },
        laptop: {
          name: 'Laptop',
          styles: {
            width: '1440px',
            height: '789px',
          },
        },
        monitor: {
          name: 'Monitor',
          styles: {
            width: '1920px',
            height: '1080px',
          },
        },
      },
    },
  },
  globalTypes: {
    locales: {
      name: 'Languages',
      description: 'Change app language',
      toolbar: {
        icon: 'globe',
        showName: true,
        defaultValue: 'en',
        items: [
          { value: 'en', title: 'English', left: '🇺🇸' },
          { value: 'es', title: 'Spanish', left: '🇪🇸' },
        ],
        dynamicTitle: true,
      },
    },
    theme: {
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light', left: '☀️' },
          { value: 'dark', title: 'Dark', left: '🌑' },
        ],
        dynamicTitle: true,
      },
    },
  },
  loaders: [
    async () => ({
      currentUser: await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json(),
    }),
  ],
};

export default preview;
