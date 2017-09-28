import axios from 'axios';
import { SERVER_URL } from '../config/endpoints';

const instance = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  baseURL: SERVER_URL
});

export const getToken = (email, password) =>
  instance.post('/authenticate', { email, password });
