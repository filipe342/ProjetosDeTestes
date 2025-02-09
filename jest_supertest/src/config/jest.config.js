module.exports = {
  testEnvironment: 'node',
  testMatch: ["<rootDir>/src/**/__tests__/**/*.[jt]s?(x)", "<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
  },
  rootDir: '../',
  setupFiles: ['<rootDir>/config/jest.setup.js'],

  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text', 'html', 'lcov'],
  collectCoverageFrom: [
      '<rootDir>/src/**/*.js',
      '!<rootDir>/src/__tests__/**',
      '!<rootDir>/src/schemas/**',
      '!<rootDir>/src/utils/helper.js'
  ],
  coverageThreshold: {
      global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
      },
  },
};