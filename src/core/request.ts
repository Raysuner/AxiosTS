import { AxiosPromise, AxiosRequestConfig } from '../types/axios';
import { transformRequestUrl } from '../utils/url';
import { transformRequestData, transformResponseData } from '../utils/data';
import { transformRequestHeaders } from '../utils/header';
import { xhrRequest } from './xhr';

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

async function request<R, P>(config: AxiosRequestConfig<P>): AxiosPromise<R> {
  const newConfig = processConfig(config);
  const res = await xhrRequest<R, P>(newConfig);
  return transformResponseData(res);
}

export default request;
