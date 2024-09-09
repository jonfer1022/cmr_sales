import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

const api = '/api';
const baseURL: string = 'http://localhost:3001';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${baseURL}${api}`,
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token: string | null = localStorage.getItem('token');

    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
