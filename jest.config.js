module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    transformIgnorePatterns: ['node_modules/(?!.*.mjs$)'],
  };
  