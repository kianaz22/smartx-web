import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from '@mui/stylis-plugin-rtl';

// Create RTL cache with proper MUI RTL plugin
const rtlCache = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// Create LTR cache (default)
const ltrCache = createCache({
  key: 'muiltr',
  stylisPlugins: [prefixer],
});

interface RTLProviderProps {
  children: React.ReactNode;
  direction: 'ltr' | 'rtl';
}

export const RTLProvider: React.FC<RTLProviderProps> = ({ children, direction }) => {
  const cache = direction === 'rtl' ? rtlCache : ltrCache;
  
  return (
    <CacheProvider value={cache}>
      {children}
    </CacheProvider>
  );
};

export default RTLProvider;
