module.exports = {
  plugins: ['node'],
  env: {
    node: true,
    commonjs: true
  },

  rules: {
    // enforce return after a callback
    'node/callback-return': 'off',

    // require all requires be top-level
    // http://eslint.org/docs/rules/global-require
    'node/global-require': 'error',

    // enforces error handling in callbacks (node environment)
    'node/handle-callback-err': 'off',

    // disallow mixing regular variable and require declarations
    'node/no-mixed-requires': ['off', false],

    // disallow use of new operator with the require function
    'node/no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    // http://eslint.org/docs/rules/no-path-concat
    'node/no-path-concat': 'error',

    // disallow use of process.env
    'node/no-process-env': 'off',

    // disallow process.exit()
    'node/no-process-exit': 'off',

    // disallow specified modules when loaded by import declarations
    'node/no-restricted-import': 'off',

    // disallow specified modules when loaded by require
    'node/no-restricted-require': 'off',

    // disallow use of synchronous methods (off by default)
    'node/no-sync': 'off'
  }
}
