import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

const getBaseURL = (): string => {
  // @ts-ignore - Vite environment variable
  if (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_BASE_URL) {
    // @ts-ignore - Vite environment variable
    return import.meta.env.VITE_API_BASE_URL;
  }
  return 'http://localhost:3001/api';
};

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: getBaseURL(),
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
      return config;
    },
    (error) => {
      console.error('[API Request Error]', error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log(`[API Response] ${response.status} ${response.config.url}`);
      return response;
    },
    (error) => {
      if (error.response) {
        console.error(
          `[API Response Error] ${error.response.status} ${error.config?.url}`,
          error.response.data
        );
      } else if (error.request) {
        console.error('[API Request Failed] No response received', error.request);
      } else {
        console.error('[API Error]', error.message);
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export const apiClient = createAxiosInstance();

export default apiClient;