import { AxiosRequestConfig } from "./types/axios";
import { transformRequestUrl } from "./utils/url";
import { transformRequestData } from "./utils/data";
import { setRequestHeader, transformRequestHeader } from "./utils/header";

function processConfig(config: AxiosRequestConfig) {
  const { url, params, data, headers = {} } = config;
  const newConfig: AxiosRequestConfig = {
    ...config,
    url: transformRequestUrl(url, params),
    headers: transformRequestHeader(headers, data),
    data: transformRequestData(data),
  };
  return newConfig;
}

export default function axios(config: AxiosRequestConfig) {
  const newConfig = processConfig(config);
  const { url = "", data = null, method = "get", headers = {} } = newConfig;
  const xhr = new XMLHttpRequest();
  xhr.open(method.toUpperCase(), url, true);
  setRequestHeader(xhr, headers);
  xhr.send(data);
}
