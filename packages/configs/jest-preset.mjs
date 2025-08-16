export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: [
    '**/__tests__/**/*.{ts,tsx}',
    '**/*.{spec,test}.{ts,tsx}'
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.ts',
    '!src/**/*.stories.{ts,tsx}'
  ],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: {
        jsx: 'react-jsx'
      },
      useESM: true
    }]
  },
  globals: {
    'import.meta': {
      env: {
        VITE_APP_NAME: 'Test App',
        VITE_API_BASE_URL: 'http://localhost:3001/api',
        MODE: 'test'
      }
    }
  }
};