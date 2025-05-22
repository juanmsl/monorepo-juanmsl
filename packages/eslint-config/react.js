const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    './library.js',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  plugins: [
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'react-hooks',
    'react-refresh',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    React: true,
    JSX: true,
  },
  rules: {
    'react/destructuring-assignment': ['error', 'always'],
    'react/jsx-fragments': ['error', 'syntax'],
    "react/jsx-no-target-blank": ['error', {
      "allowReferrer": true,
    }],
    'react/jsx-no-useless-fragment': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'react-refresh/only-export-components': ['off', { allowConstantExport: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
};
