import { isPlainObject } from "./base";

function transformHeader(headers: any, normalizedName: string) {
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

export function transformRequestHeader(headers: any, data: any) {
  const newHeaders = { ...headers };
  transformHeader(newHeaders, "Content-Type");
  if (isPlainObject(data)) {
    if (newHeaders && !newHeaders["Content-Type"]) {
      newHeaders["Content-Type"] = "application/json;charset=utf-8";
    }
  }
  return newHeaders;
}

export function setRequestHeader(xhr: XMLHttpRequest, headers: any) {
  if (isPlainObject(headers)) {
    Object.keys(headers).forEach((key) => {
      xhr.setRequestHeader(key, headers[key]);
    });
  }
}
