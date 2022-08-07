import { AxiosRequestConfig } from '../types/axios';
import { transformRequestUrl } from '../utils/url';
import { transformRequestData, transformResponseData } from '../utils/data';
import { transformRequestHeaders } from '../utils/header';
import { request } from './xhr';

function processConfig(config: AxiosRequestConfig) {
  const { url, params, data, headers = {} } = config;
  const newConfig: AxiosRequestConfig = {
    ...config,
    url: transformRequestUrl(url!, params),
    headers: transformRequestHeaders(headers, data),
    data: transformRequestData(data)
  };
  return newConfig;
}

async function axios(config: AxiosRequestConfig) {
  const newConfig = processConfig(config);
  const res = await request(newConfig);
  return transformResponseData(res);
}

export default axios;
