export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'head'
  | 'HEAD'
  | 'delete'
  | 'DELETE'
  | 'options'
  | 'OPTIONS';

export type AxiosRequestHeaders = Record<string, string>;
export interface AxiosRequestConfig<T = any> {
  url?: string;
  method?: Method;
  params?: any;
  data?: T;
  headers?: AxiosRequestHeaders;
  responseType?: XMLHttpRequestResponseType;
  timeout?: number;
}

export type AxiosResponseHeaders = Record<string, string> & {
  'set-cookie'?: string[];
};
export interface AxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig;
  request: XMLHttpRequest;
}

export type AxiosPromise<T = any> = Promise<AxiosResponse<T>>;

export interface AxiosError extends Error {
  code?: string | number;
  request?: XMLHttpRequest;
  response?: AxiosResponse;
  config: AxiosRequestConfig;
  isAxiosError: boolean;
}
