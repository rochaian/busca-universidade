import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.meuguru.net',
});

export default api;