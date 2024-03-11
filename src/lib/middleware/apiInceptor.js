import axios from 'axios';
import Cookies from 'js-cookie';
import { BASE_URL } from '../constants';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

const setAuthToken = (token) => {
  Cookies.set('jwtToken', token, { secure: true, sameSite: 'strict' });
};

const removeAuthToken = () => {
  Cookies.remove('jwtToken', { secure: true, sameSite: 'strict' });
};

const getAuthToken = () => {
  return Cookies.get('jwtToken');
};

api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // You can add logic here for token refreshing if required
    return response;
  },
  (error) => {
    console.error('Response interceptor error:', error);
    return Promise.reject(error);
  }
);

export { api, setAuthToken, getAuthToken, removeAuthToken };
