import { AxiosInstance } from './types/axios';
import extend from './utils/extend';
import Axios from './core/axios';

function createAxios(): AxiosInstance {
  const initialAxios = new Axios();
  const instance = Axios.prototype.request;
  extend(instance, initialAxios);
  return instance as AxiosInstance;
}

const axios = createAxios();

export default axios;
