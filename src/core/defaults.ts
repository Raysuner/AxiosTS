import { AxiosRequestConfig } from '../typing';

const defaults: AxiosRequestConfig = {
  method: 'get',
  timeout: 0,
  headers: {
    common: {}
  }
};

const methodListWithData = ['post', 'patch', 'put'];
const methodListWithoutData = ['get', 'head', 'delete', 'options'];

methodListWithoutData.forEach((method) => {
  defaults.headers![method] = {};
});

methodListWithData.forEach((method) => {
  defaults.headers![method] = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
});

export default defaults;
