import { create } from '@storybook/theming';

export default create({
  base: 'dark',
  brandTitle: 'Juanmsl',
  brandUrl: 'https://juanmsl.com',
  brandImage:
    'https://images.ctfassets.net/oums43ieu6nl/2ylSC9qo4LKhdbuA5w0UEv/629d5bff94b007225fe27dc472963a2e/Storybook_logo.png',
  brandTarget: '_blank',

  // Typography
  fontBase: '"Montserrat Alternates", sans-serif',
  fontCode: 'monospace',

  colorPrimary: '#B91345',
  colorSecondary: '#177fff',
  barHoverColor: '#B91345',
  barSelectedColor: '#B91345',

  appBg: '#181929',
  barBg: '#181929',

  appContentBg: '#202130',
  appPreviewBg: '#202130',
  inputBg: '#202130',

  gridCellSize: 10,
  appBorderRadius: 10,
  inputBorderRadius: 10,

  appBorderColor: '#2b3135',

  inputBorder: '#878787',
  buttonBorder: '#878787',

  textColor: '#FFFFFF',
  textInverseColor: '#FFFFFF',
  barTextColor: '#FFFFFF',
  inputTextColor: '#FFFFFF',
  buttonBg: '#212335',

  booleanBg: '#181929',
  /*
   * textMutedColor: '#563CC9',
   * booleanSelectedBg: '#563CC9',
   */
});
