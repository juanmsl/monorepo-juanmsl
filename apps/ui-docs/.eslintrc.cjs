/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@juanmsl/eslint-config/vite-react.js",
    "plugin:storybook/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
