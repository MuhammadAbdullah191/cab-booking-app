import axios from 'axios';
import { getValue } from '../helpers/asynStorageHelper';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  headers: { 'Content-Type': 'multipart/form-data' }
});

axiosInstance.interceptors.request.use(async(config) => {
  const token = await getValue('token')
  console.log(token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
