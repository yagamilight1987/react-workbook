import axios, { AxiosInstance } from 'axios';
import setupAxiosMock from './axios.mock';

const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

if (process.env.NEXT_USE_API_MOCK) {
  setupAxiosMock(instance);
}

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    console.log('From axios interceptor: ', response);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default instance;
