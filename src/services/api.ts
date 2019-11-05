import axios, { AxiosResponse } from 'axios';
import { Panda } from '../types/Pandas';

const loadPandas = (): Promise<Panda[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get('http://localhost:3004/pandas')
      .then((response: AxiosResponse) => resolve(response.data))
      .catch(error => reject(error));
  });
};

export default {
  loadPandas,
};
