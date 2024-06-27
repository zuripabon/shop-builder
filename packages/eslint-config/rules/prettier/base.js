module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'none',
        tabWidth: 2,
        useTabs: false,
        endOfLine: "auto"
      }
    ]
  }
}
