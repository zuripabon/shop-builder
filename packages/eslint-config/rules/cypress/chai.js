module.exports = {
  // https://github.com/ihordiachenko/eslint-plugin-chai-friendly
  plugins: ['chai-friendly'],
  // https://github.com/cypress-io/eslint-plugin-cypress#chai-and-no-unused-expressions
  rules: {
    'no-unused-expressions': 'off',
    'chai-friendly/no-unused-expressions': 'error'
  }
}
