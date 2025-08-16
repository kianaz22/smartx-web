import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { usePing } from './usePing';
import React from 'react';

describe('usePing', () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it('should return ping data', async () => {
    const { result } = renderHook(() => usePing(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(
      expect.objectContaining({
        message: 'Pong! API is responding',
        status: 'ok',
        timestamp: expect.any(String),
      })
    );
  });

  it('should be loading initially', () => {
    const { result } = renderHook(() => usePing(), { wrapper });
    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();
  });
});