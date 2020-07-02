import axios from 'axios';
import { config } from 'config';

const api = axios.create({
  baseURL: config.baseApiUrl,
});

api.interceptors.request.use(currentConfig => {
  currentConfig.headers.authorization = config.authorizationToken;
  return currentConfig;
});

api.interceptors.response.use(
  response => Promise.resolve(response),
  error => Promise.reject(error),
);

export default api;
