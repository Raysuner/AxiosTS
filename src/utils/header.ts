import { AxiosResponseHeaders } from '../typing';
import { isPlainObject } from './type';

function transformHeaders(headers: any, normalizedName: string) {
  Object.keys(headers).forEach((key) => {
    if (
      key !== normalizedName &&
      key.toLowerCase() === normalizedName.toLowerCase()
    ) {
      headers[normalizedName] = headers[key];
      delete headers[key];
    }
  });
}

export function transformRequestHeaders(headers: any, data: any) {
  const newHeaders = { ...headers };
  transformHeaders(newHeaders, 'Content-Type');
  if (isPlainObject(data)) {
    if (newHeaders && !newHeaders['Content-Type']) {
      newHeaders['Content-Type'] = 'application/json;charset=utf-8';
    }
  }
  return newHeaders;
}

export function transformResponseHeaders(headers: string) {
  const parseHeaders = {} as AxiosResponseHeaders;
  if (!headers) {
    return parseHeaders;
  }
  headers.split('\r\n').forEach((line) => {
    let [key, value] = line.split(':');
    if (!key) {
      return;
    }
    key = key.trim().toLowerCase();
    if (value) {
      value = value.trim();
    }
    parseHeaders[key] = value;
  });
  return parseHeaders;
}
