import { isDate, isObject } from './type';

function encode(value: string) {
  return encodeURIComponent(value)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}

export function transformRequestUrl(url: string, params?: any) {
  if (!params) {
    return url;
  }
  const queryList: string[] = [];
  Object.keys(params).forEach((key) => {
    const value = params[key];
    let values: string[] | null = null;
    if (value == null) {
      return;
    } else {
      if (Array.isArray(value)) {
        values = value;
        key += '[]';
      } else {
        values = [value];
      }
    }

    values.forEach((val) => {
      if (isDate(val)) {
        val = val.toISOString();
      } else if (isObject(val)) {
        val = JSON.stringify(val);
      }
      queryList.push(`${encode(key)}=${encode(val)}`);
    });
  });
  const query = queryList.join('&');
  let finalUrl = url;

  if (query) {
    const hashIndex = url.indexOf('#');
    const queryIndex = url.indexOf('?');

    if (hashIndex !== -1) {
      finalUrl = url.slice(0, hashIndex);
    }

    finalUrl += (queryIndex !== -1 ? '&' : '?') + query;
  }

  return finalUrl;
}
