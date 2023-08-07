const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/*.{ts,tsx,js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/*.stories*.{ts,tsx,js,jsx}',
    '!**/*.test*.{ts,tsx,js,jsx}',
    '!**/robots.ts',
    '!**/sitemap.ts',
    '!**/*.snap',
  ],
  coverageDirectory: 'coverage/jest',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.vscode/',
    '/.swc/',
    '/.storybook/',
    '/.next/',
    '/.husky/',
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
