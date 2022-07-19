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

export interface AxiosRequestConfig {
  url: string;
  method?: Method;
  params?: any;
  data?: any;
  headers?: any;
}
