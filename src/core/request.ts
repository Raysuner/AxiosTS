import { AxiosPromise, AxiosRequestConfig } from '../types/axios';
import { transformRequestUrl } from '../utils/url';
import flattenHeaders from '../utils/flattenHeaders';
import { xhrRequest } from './xhr';
import transform from './transform';

function processConfig(config: AxiosRequestConfig) {
  const { url, method, params, data, transformRequest } = config;
  const newConfig: AxiosRequestConfig = {
    ...config
  };
  newConfig.url = transformRequestUrl(url!, params);
  newConfig.data = transform(data, transformRequest!);
  newConfig.headers = flattenHeaders(newConfig.headers!, method!);
  return newConfig;
}

async function request<R, P>(config: AxiosRequestConfig<P>): AxiosPromise<R> {
  const newConfig = processConfig(config);
  const res = await xhrRequest<R, P>(newConfig);
  return transform(res, newConfig.transformResponse!);
}

export default request;
