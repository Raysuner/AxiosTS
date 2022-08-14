import {
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
  Interceptor,
  Method
} from '../typing';
import InterceptorManager from './interceptors';
import mergeConfig from './mergeConfig';
import request from './request';

interface Interceptors {
  request: InterceptorManager<AxiosRequestConfig>;
  response: InterceptorManager<AxiosResponse>;
}

type PromiseList<T> = Array<Interceptor<T>>;

class Axios {
  private interceptors: Interceptors;
  private defaults: AxiosRequestConfig;
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

  constructor(initConfig: AxiosRequestConfig) {
    this.interceptors = {
      request: new InterceptorManager<AxiosRequestConfig>(),
      response: new InterceptorManager<AxiosResponse>()
    };
    this.defaults = initConfig;
  }

  request<R = any, P = any>(url: any, config?: any): AxiosPromise<R> {
    let newConfig = { ...config };

    if (typeof url === 'string') {
      newConfig.url = url;
    } else {
      newConfig = url;
    }

    newConfig = mergeConfig(this.defaults, newConfig);
    let promise = Promise.resolve(newConfig);
    const promiseList: PromiseList<any> = [
      {
        resolveFn: request,
        rejectFn: undefined
      }
    ];

    this.interceptors.request.forEach((interceptor) => {
      promiseList.unshift(interceptor);
    });
    this.interceptors.response.forEach((interceptor) => {
      promiseList.push(interceptor);
    });

    while (promiseList.length) {
      const { resolveFn, rejectFn } = promiseList.shift()!;
      promise = promise.then(resolveFn, rejectFn);
    }

    return promise;
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
