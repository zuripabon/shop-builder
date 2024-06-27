module.exports = {
  env: {
    jest: true
  },
  plugins: ['jest'],
  // View link below for jest rules documentation
  // https://github.com/facebook/jest/tree/master/packages/eslint-plugin-jest/docs/rules
  rules: {
    // Reminds to remove .skip or the x prefix from tests
    // https://github.com/facebook/jest/blob/master/packages/eslint-plugin-jest/docs/rules/no-disabled-tests.md
    'jest/no-disabled-tests': 'warn',

    // Reminds you to remove .only from tests
    // https://github.com/facebook/jest/blob/master/packages/eslint-plugin-jest/docs/rules/no-focused-tests.md
    'jest/no-focused-tests': 'error',

    // Reports when two test suites or two test cases at the same level of a test suite have the same title
    // https://github.com/facebook/jest/blob/master/packages/eslint-plugin-jest/docs/rules/no-identical-title.md
    'jest/no-identical-title': 'error',

    // Ensures expect() is called with a single argument and there is an actual expectation made.
    // https://github.com/facebook/jest/blob/master/packages/eslint-plugin-jest/docs/rules/valid-expect.md
    'jest/valid-expect': 'error'
  }
}
