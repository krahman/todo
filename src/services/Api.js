import axios from 'axios';

/**
 * Initialize axios
 * @return {AxiosInstance}
 */
export default () => axios.create({
  baseURL: 'http://localhost:8081',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

