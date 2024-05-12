module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      // Use Next.js compiler for .ts and .tsx files
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleNameMapper: {
      // Handle module aliases (if used)
      "^@/pages/(.*)$": "<rootDir>/pages/$1",
      "^@/components/(.*)$": "<rootDir>/components/$1",
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  };
  