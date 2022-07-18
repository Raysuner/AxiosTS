import { AxiosRequestConfig } from "./types/axios";
import { buildUrl } from "./utils/buildUrl";

function processConfig(config: AxiosRequestConfig) {
  const { url, params } = config;
  const newConfig = {
    ...config,
    url: buildUrl(url, params),
  };
  return newConfig;
}

export default function axios(config: AxiosRequestConfig) {
  const newConfig = processConfig(config);
  const { url = "", params = null, data = null, method = "get" } = newConfig;
  const xhr = new XMLHttpRequest();
  xhr.open(method.toUpperCase(), url, true);
  xhr.send(data || params);
}
