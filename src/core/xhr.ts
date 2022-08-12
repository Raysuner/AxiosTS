import {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosPromise
} from '../types/axios';
import { transformResponseHeaders } from '../utils/header';
import { isPlainObject } from '../utils/type';
import { createError } from '../utils/error';

export function xhrRequest<R, P>(
  config: AxiosRequestConfig<P>
): AxiosPromise<R> {
  return new Promise<AxiosResponse<R>>((resolve, reject) => {
    const {
      url = '',
      data = null,
      method = 'get',
      headers = {},
      responseType,
      timeout
    } = config;
    const xhr = new XMLHttpRequest();
    xhr.open(method.toUpperCase(), url, true);

    if (responseType) {
      xhr.responseType = responseType;
    }

    if (timeout) {
      xhr.timeout = timeout;
    }

    xhr.onerror = function () {
      reject(createError('Network Error', config, undefined, this));
    };

    xhr.ontimeout = function () {
      reject(createError(`Timeout of ${timeout}`, config, undefined, this));
    };

    xhr.onloadend = function () {
      const responseHeaders = transformResponseHeaders(
        this.getAllResponseHeaders()
      );
      const responseData =
        this.responseType === 'text' ? this.responseText : this.response;
      const response: AxiosResponse = {
        headers: responseHeaders,
        data: responseData,
        status: this.status,
        statusText: this.statusText,
        request: this,
        config
      };
      if (response.status >= 200 && response.status < 300) {
        resolve(response);
      } else {
        reject(new Error(`request failed with status code ${response.status}`));
      }
    };

    if (isPlainObject(headers)) {
      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });
    }

    xhr.send(data as any);
  });
}
