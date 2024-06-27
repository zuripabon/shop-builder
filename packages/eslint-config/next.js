const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    require.resolve("@vercel/style-guide/eslint/next"),
    "eslint-config-turbo",
    './rules/errors',
    './rules/strict',
    './rules/style',
    './rules/imports',
    './rules/variables',
    './rules/react/base',
    './rules/react/ay11',
    './rules/react/hooks',
    './rules/prettier/base'
    // './rules/best-practices',
    // './rules/errors',
    // './rules/strict',
    // './rules/style',
    // './rules/variables',
    // './rules/es6',
    // './rules/imports',
    // './rules/react/base',
    // './rules/react/ay11',
    // './rules/react/hooks',
    // './rules/prettier/base'
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  rules: {
    strict: 'error',
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "args": "all",
        "argsIgnorePattern": "^_",
        "caughtErrors": "all",
        "caughtErrorsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ]
  },
  // plugins: ["only-warn"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
