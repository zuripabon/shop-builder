const { join } = require('path');
/** @type {import('jest').Config} */
const config = {
  testURL: 'http://localhost/',
  testMatch: [
    '**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: [join(__dirname, 'setupTests.js')],
  coveragePathIgnorePatterns: ['__tests__/mocks/*'],
  watchPathIgnorePatterns: ['__tests__/mocks/*'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist',
    '__tests__/integration',
    '__tests__/mocks/*'
  ]
};

module.exports = config;
