import axios, {AxiosInstance, AxiosError} from 'axios';
import { store } from '../store';
import { setError } from '../store/action';

const BASE_URL = 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464'
const REQUEST_TIMEOUT = 5000;
const REQUEST_HEADERS = { "Content-Type": "application/json" }

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    headers: REQUEST_HEADERS,
  });

  
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response) {
        store.dispatch(setError(true));
      }

      throw error;
    }
  );

  return api;
};
