import {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosResponsePromise,
} from "../types/axios";
import { transformResponseHeaders } from "./header";
import { isPlainObject } from "./type";

export function request(config: AxiosRequestConfig): AxiosResponsePromise {
  return new Promise((resolve) => {
    const {
      url = "",
      data = null,
      method = "get",
      headers = {},
      responseType,
    } = config;
    const xhr = new XMLHttpRequest();
    xhr.open(method.toUpperCase(), url, true);

    if (responseType) {
      xhr.responseType = responseType;
    }

    xhr.onloadend = function () {
      const responseHeaders = transformResponseHeaders(
        this.getAllResponseHeaders()
      );
      const responseData =
        this.responseType === "text" ? this.responseText : this.response;
      const response: AxiosResponse = {
        headers: responseHeaders,
        data: responseData,
        status: this.status,
        statusText: this.statusText,
        request: this,
        config,
      };
      resolve(response);
    };

    if (isPlainObject(headers)) {
      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });
    }

    xhr.send(data);
  });
}
