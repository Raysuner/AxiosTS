import { AxiosRequestConfig } from "./types/axios";
import { transformRequestUrl } from "./utils/url";
import { transformRequestData } from "./utils/data";
import { transformRequestHeaders } from "./utils/header";
import { request } from "./utils/xhr";

function processConfig(config: AxiosRequestConfig) {
  const { url, params, data, headers = {} } = config;
  const newConfig: AxiosRequestConfig = {
    ...config,
    url: transformRequestUrl(url, params),
    headers: transformRequestHeaders(headers, data),
    data: transformRequestData(data),
  };
  return newConfig;
}

export default function axios(config: AxiosRequestConfig) {
  const newConfig = processConfig(config);
  return request(newConfig);
}
