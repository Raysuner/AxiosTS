import { AxiosInstance } from '../types/axios';
import extend from '../utils/extend';
import Axios from './axios';

function create(): AxiosInstance {
  const initialAxios = new Axios();
  const instance = Axios.prototype.request;
  extend(instance, initialAxios);
  return instance as AxiosInstance;
}

const axios = create();

export default axios;
