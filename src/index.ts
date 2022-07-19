import { AxiosRequestConfig } from "./types/axios";
import { buildUrl } from "./utils/buildUrl";
import { transformRequestData } from "./utils/data";

function processConfig(config: AxiosRequestConfig) {
  const { url, params, data } = config;
  const newConfig = {
    ...config,
    url: buildUrl(url, params),
    data: transformRequestData(data),
  };
  return newConfig;
}

export default function axios(config: AxiosRequestConfig) {
  const newConfig = processConfig(config);
  const { url = "", data = null, method = "get" } = newConfig;
  const xhr = new XMLHttpRequest();
  xhr.open(method.toUpperCase(), url, true);
  xhr.send(data);
}
