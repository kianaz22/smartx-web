import { useQuery, UseQueryResult } from '@tanstack/react-query';

interface PingResponse {
  message: string;
  timestamp: string;
  status: 'ok' | 'error';
}

const fetchPing = async (): Promise<PingResponse> => {
  // Mock response for demo purposes
  // In production, this would be: const { data } = await apiClient.get<PingResponse>('/ping');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: 'Pong! API is responding',
        timestamp: new Date().toISOString(),
        status: 'ok',
      });
    }, 500);
  });
};

export const usePing = (): UseQueryResult<PingResponse, Error> => {
  return useQuery({
    queryKey: ['ping'],
    queryFn: fetchPing,
    refetchInterval: 30000, // Refresh every 30 seconds
  });
};

export default usePing;