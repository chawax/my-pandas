import axios, { AxiosError, AxiosResponse } from 'axios';
import { Panda } from '../types/Pandas';

const loadPandas = (): Promise<Panda[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get('http://localhost:3004/pandas')
      .then((response: AxiosResponse) => resolve(response.data))
      .catch((error: AxiosError) => reject(error));
  });
};

const createPanda = (panda: Panda): Promise<Panda> => {
  return new Promise((resolve, reject) => {
    axios
      .post('http://localhost:3004/pandas', panda)
      .then((response: AxiosResponse) => resolve(response.data))
      .catch((error: AxiosError) => reject(error));
  });
};

export default {
  loadPandas,
  createPanda,
};
