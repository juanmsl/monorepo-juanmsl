const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    './react.js',
    require.resolve('@vercel/style-guide/eslint/next')
  ],
  plugins: ['only-warn'],
};
