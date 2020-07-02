import axios from 'axios';
import { config } from 'config';

const api = axios.create({
  baseURL: config.baseApiUrl,
});

api.interceptors.request.use(config => {
  const newConfig = { ...config };
  newConfig.headers.authorization = config.authorizationToken;
  return newConfig;
});

api.interceptors.response.use(
  response => Promise.resolve(response),
  error => Promise.reject(error),
);

export default api;
