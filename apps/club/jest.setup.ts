import '@testing-library/jest-dom';

// Mock import.meta
global.import = {
  meta: {
    env: {
      VITE_APP_NAME: 'SmartX Club Test',
      VITE_API_BASE_URL: 'http://localhost:3001/api',
      MODE: 'test'
    }
  }
} as any;