module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'turbo',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    /*babelOptions: {
      presets: [require.resolve("next/babel")],
    },*/
  },
  plugins: [
    'react-refresh',
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    'curly': 'error',
    'import/prefer-default-export': 'off',
    'no-empty': 'error',
    'no-console': 'warn',
    'quotes': ['error', 'single'],
    'react-refresh/only-export-components': 'warn',
    'semi': 'error',
  },
};
