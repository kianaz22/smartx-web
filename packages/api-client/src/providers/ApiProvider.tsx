import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../config/queryClient';

interface ApiProviderProps {
  children: React.ReactNode;
}

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ApiProvider;