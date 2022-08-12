import { AxiosPromise, AxiosRequestConfig, Method } from '../typing';
import request from './request';

class Axios {
  private _request<R = any, P = any>(
    url: string,
    method: Method,
    config?: AxiosRequestConfig<P>,
    data?: any
  ): AxiosPromise<R> {
    return this.request<R, P>(
      Object.assign(config || {}, { url, method, data: data || {} })
    );
  }

  request<R = any, P = any>(url: any, config?: any): AxiosPromise<R> {
    if (typeof url === 'string') {
      return request<R, P>({ ...config, url });
    }
    return request<R, P>(config);
  }

  get<R = any, P = any>(
    url: string,
    config?: AxiosRequestConfig<P>
  ): AxiosPromise<R> {
    return this._request<R, P>(url, 'get', config);
  }

  delete<R = any, P = any>(
    url: string,
    config?: AxiosRequestConfig<P>
  ): AxiosPromise<R> {
    return this._request<R, P>(url, 'delete', config);
  }

  head<R = any, P = any>(
    url: string,
    config?: AxiosRequestConfig<P>
  ): AxiosPromise<R> {
    return this._request<R, P>(url, 'head', config);
  }

  options<R = any, P = any>(
    url: string,
    config?: AxiosRequestConfig<P>
  ): AxiosPromise<R> {
    return this._request<R, P>(url, 'options', config);
  }

  post<R = any, P = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<P>
  ): AxiosPromise<R> {
    return this._request<R, P>(url, 'post', config, data);
  }

  put<R = any, P = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<P>
  ): AxiosPromise<R> {
    return this._request<R, P>(url, 'put', config, data);
  }

  patch<R = any, P = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<P>
  ): AxiosPromise<R> {
    return this._request<R, P>(url, 'patch', config, data);
  }
}

export default Axios;
