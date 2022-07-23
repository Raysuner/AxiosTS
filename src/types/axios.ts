import axios from "axios";
export type Method =
  | "get"
  | "GET"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH"
  | "head"
  | "HEAD"
  | "delete"
  | "DELETE"
  | "options"
  | "OPTIONS";

export type AxiosRequestHeaders = Record<string, string>;
export interface AxiosRequestConfig<T = any> {
  url: string;
  method?: Method;
  params?: any;
  data?: T;
  headers?: AxiosRequestHeaders;
  responseType?: XMLHttpRequestResponseType;
}

export type AxiosResponseHeaders = Record<string, string> & {
  "set-cookie"?: string[];
};
export interface AxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig;
  request: XMLHttpRequest;
}

export interface AxiosResponsePromise<T = any>
  extends Promise<AxiosResponse<T>> {}
