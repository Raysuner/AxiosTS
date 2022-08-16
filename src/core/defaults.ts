import { AxiosRequestConfig, AxiosResponse } from '../typing';
import { transformRequestData, transformResponseData } from '../utils/data';
import { transformRequestHeaders } from '../utils/header';

const defaults: AxiosRequestConfig = {
  method: 'get',
  timeout: 0,
  headers: {
    common: {}
  },
  transformRequest: [
    function (config: AxiosRequestConfig | AxiosResponse) {
      config.headers = transformRequestHeaders(config.headers, config.data);
      return transformRequestData(config.data);
    }
  ],
  transformResponse: [
    function (data: AxiosResponse | AxiosRequestConfig) {
      return transformResponseData(data);
    }
  ]
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
