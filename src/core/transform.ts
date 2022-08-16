import { AxiosRequestConfig, Transformer } from '../typing';

export default function transform(
  config: AxiosRequestConfig,
  funcList: Transformer | Transformer[]
) {
  if (!funcList) {
    return config.data;
  }
  const fnList = Array.isArray(funcList) ? funcList : [funcList];
  fnList.forEach((fn) => {
    config.data = fn(config);
  });
  return config.data;
}
