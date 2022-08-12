import { AxiosPromise, AxiosRequestConfig, Method } from '../typing';
import request from './request';

class Axios {
  private _request<T = any, R = any>(
    url: string,
    method: Method,
    config?: AxiosRequestConfig<T>,
    data?: any
  ): AxiosPromise<R> {
    return this.request<T, R>(
      Object.assign(config || {}, { url, method, data: data || {} })
    );
  }

  request<T = any, R = any>(url: any, config?: any): AxiosPromise<R> {
    if (typeof url === 'string') {
      return request<T, R>({ ...config, url });
    }
    return request<T, R>(config);
  }

  get<T = any, R = any>(
    url: string,
    config?: AxiosRequestConfig<T>
  ): AxiosPromise<R> {
    return this._request<T, R>(url, 'get', config);
  }

  delete<T = any, R = any>(
    url: string,
    config?: AxiosRequestConfig<T>
  ): AxiosPromise<R> {
    return this._request(url, 'delete', config);
  }

  head<T = any, R = any>(
    url: string,
    config?: AxiosRequestConfig<T>
  ): AxiosPromise<R> {
    return this._request(url, 'head', config);
  }

  options<T = any, R = any>(
    url: string,
    config?: AxiosRequestConfig<T>
  ): AxiosPromise<R> {
    return this._request(url, 'options', config);
  }

  post<T = any, R = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<T>
  ): AxiosPromise<R> {
    return this._request(url, 'post', config, data);
  }

  put<T = any, R = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<T>
  ): AxiosPromise<R> {
    return this._request(url, 'put', config, data);
  }

  patch<T = any, R = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<T>
  ): AxiosPromise<R> {
    return this._request(url, 'patch', config, data);
  }
}

export default Axios;
