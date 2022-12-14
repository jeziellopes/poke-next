const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/data/(.*)$': '<rootDir>/src/app/data/$1',
    '^@/domain/(.*)$': '<rootDir>/src/app/domain/$1',
    '^@/infra/(.*)$': '<rootDir>/src/app/infra/$1',
    '^@/presentation/(.*)$': '<rootDir>/src/app/presentation/$1',
    '^@/main/(.*)$': '<rootDir>/src/app/main/$1',
    '^@/api/(.*)$': '<rootDir>/src/api/$1',
    '^@/prisma/(.*)$': '<rootDir>/prisma/$1',
    '^@/components/(.*)$': '<rootDir>/src/app/presentation/components/$1',
    '^@/styles/(.*)$': '<rootDir>/src/app/presentation/styles/$1',
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/src/api/infra/helpers/',
    '<rootDir>/src/app/main/',
    '<rootDir>/src/app/presentation/contexts',
    '<rootDir>/src/app/presentation/styles',
    '<rootDir>/src/app/presentation/useCases',
    '<rootDir>/src/app/presentation/providers',
    '<rootDir>/src/app/presentation/components/context',
  ],
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./.jest/setEnvVars.js'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
const asyncConfig = createJestConfig(customJestConfig)

// using transformIgnorePatterns workaround by @HW13
// https://github.com/vercel/next.js/discussions/31152#discussioncomment-1697047
module.exports = async () => {
  const config = await asyncConfig()
  config.transformIgnorePatterns = ['/node_modules/(?!(axios)/)']
  return config
}
