import { AxiosRequestConfig, AxiosResponse } from '../typing';

class AxiosError extends Error {
  public message: string;
  public config: AxiosRequestConfig;
  public code?: number | string;
  public request?: XMLHttpRequest;
  public response?: AxiosResponse;
  public isAxiosError: boolean;

  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string | number,
    request?: XMLHttpRequest,
    response?: AxiosResponse
  ) {
    super(message);
    this.message = message;
    this.config = config;
    this.code = code;
    this.request = request;
    this.response = response;
    this.isAxiosError = true;
  }
}

export function createError(
  message: string,
  config: AxiosRequestConfig,
  code?: string | number,
  request?: XMLHttpRequest,
  response?: AxiosResponse
) {
  return new AxiosError(message, config, code, request, response);
}
