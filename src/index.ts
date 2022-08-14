import { AxiosInstance, AxiosRequestConfig } from './types/axios';
import defaults from './core/defaults';
import extend from './utils/extend';
import Axios from './core/axios';

function createAxios(defaultConfig: AxiosRequestConfig): AxiosInstance {
  const initialAxios = new Axios(defaultConfig);
  const instance = Axios.prototype.request.bind(initialAxios);
  extend(instance, initialAxios);
  return instance as AxiosInstance;
}

const axios = createAxios(defaults);

export default axios;
