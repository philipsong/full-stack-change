const path = require('path');

module.exports = {
  rootDir: "./src",
  collectCoverage: true,
  coverageDirectory: '<rootDir>/../coverage',
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  setupFiles: [
    path.resolve('jest/setupEnzyme.js')
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage/'
  ],
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/client/mocks/styleMock.js'
  },
  testMatch: ["**/__tests__/**/*.js?(x)"]
};