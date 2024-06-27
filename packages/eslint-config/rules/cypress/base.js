module.exports = {
  // https://github.com/cypress-io/eslint-plugin-cypress
  plugins: ['cypress'],
  env: {
    'cypress/globals': true
  },
  rules: {
    // https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/assertion-before-screenshot.md
    'cypress/assertion-before-screenshot': 'warn',

    // https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/no-assigning-return-values.md
    'cypress/no-assigning-return-values': 'error',

    // https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/no-async-tests.md
    'cypress/no-async-tests': 'error',

    // https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/no-force.md
    'cypress/no-force': 'error',

    // https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/no-pause.md
    'cypress/no-pause': 'error',

    // https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/no-unnecessary-waiting.md
    'cypress/no-unnecessary-waiting': 'error',

    // https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/require-data-selectors.md
    'cypress/require-data-selectors': 'warn',

    // Do not mark as error the usage of TypeScript triple-slash directives
    // https://docs.cypress.io/guides/tooling/typescript-support#Types-for-Custom-Commands
    // https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-
    // https://eslint.org/docs/latest/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/']
      }
    ]
  }
}
