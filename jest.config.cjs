module.exports = {
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/src/test/style-mock.js",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/src/test/image-mock.js",
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
