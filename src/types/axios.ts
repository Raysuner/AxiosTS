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

export interface Axios {
  request<T = any, R = any>(config: AxiosRequestConfig<T>): AxiosPromise<R>;

  get<T = any, R = any>(
    url: string,
    config?: AxiosRequestConfig<T>
  ): AxiosPromise<R>;

  delete<T = any, R = any>(
    url: string,
    config?: AxiosRequestConfig<T>
  ): AxiosPromise<R>;

  head<T = any, R = any>(
    url: string,
    config?: AxiosRequestConfig<T>
  ): AxiosPromise<R>;

  options<T = any, R = any>(
    url: string,
    config?: AxiosRequestConfig<T>
  ): AxiosPromise<R>;

  post<T = any, R = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<T>
  ): AxiosPromise<R>;

  put<T = any, R = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<T>
  ): AxiosPromise<R>;

  patch<T = any, R = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<T>
  ): AxiosPromise<R>;
}

interface Interceptors {
  request: InterceptorManager<AxiosRequestConfig>;
  response: InterceptorManager<AxiosResponse>;
}

export interface AxiosInstance extends Axios {
  interceptors: Interceptors;
  <T = any, R = any>(config: AxiosRequestConfig<T>): AxiosPromise<R>;
  <T = any, R = any>(
    url: string,
    config?: AxiosRequestConfig<T>
  ): AxiosPromise<R>;
}

export interface ResolvedFn<T> {
  (val: T): T | Promise<T>;
}

export interface RejectedFn {
  (error: any): any;
}

export interface InterceptorManager<T> {
  use(resolve: ResolvedFn<T>, reject?: RejectedFn): number;
  eject(id: number): void;
}

export interface Interceptor<T> {
  resolveFn: ResolvedFn<T>;
  rejectFn?: RejectedFn;
}
