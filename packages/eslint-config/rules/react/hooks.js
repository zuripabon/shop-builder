module.exports = {
  plugins: ['react-hooks'],
  // View link below for react-hooks rules documentation
  // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
  rules: {
    // Ensures that hooks follow the Rules of Hooks (https://reactjs.org/docs/hooks-rules.html)
    'react-hooks/rules-of-hooks': 'error',
    // Verifies the list of dependencies for Hooks like `useEffect` and similar
    'react-hooks/exhaustive-deps': 'warn'
  }
}
