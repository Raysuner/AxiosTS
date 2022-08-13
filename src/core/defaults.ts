import { AxiosRequestConfig } from '../typing';

const defaults: AxiosRequestConfig = {
  method: 'get',
  timeout: 0,
  headers: {}
};

const methodListWithData = ['post', 'patch', 'put'];
const methodListWithoutData = ['get', 'head', 'delete', 'options'];

methodListWithoutData.forEach((method) => {
  defaults.headers![method] = {};
});

methodListWithData.forEach((method) => {
  defaults.headers![method] = {
    'Content-Type': 'application/json;charset=utf-8'
  };
});

export default defaults;
