import { AxiosRequestConfig } from '../typing';
import deepMerge from '../utils/deepMerge';
import { isPlainObject } from '../utils/type';

const strategyMap = Object.create(null);
const customStrategyProps = ['url', 'data', 'params'];
const customDeepStrategyProps = ['headers'];

customStrategyProps.forEach((prop) => {
  strategyMap[prop] = customStrategy;
});

customDeepStrategyProps.forEach((prop) => {
  strategyMap[prop] = customDeepStrategy;
});

function defaultStrategy(val1: any, val2: any): any {
  return val2 === undefined ? val1 : val2;
}

function customStrategy(val1: any, val2: any): any {
  return val2;
}

function customDeepStrategy(val1: any, val2: any): any {
  if (isPlainObject(val2)) {
    return deepMerge(val1, val2);
  } else if (val2 !== undefined) {
    return val2;
  } else if (isPlainObject(val1)) {
    return deepMerge(val1);
  } else {
    return val1;
  }
}

export default function mergeConfig(
  defaultConfig: AxiosRequestConfig,
  customConfig?: AxiosRequestConfig
): AxiosRequestConfig {
  const customConf = customConfig ?? {};
  const config = Object.create(null);

  Object.keys(customConf).forEach((key) => {
    if (!config[key]) {
      mergeField(key);
    }
  });
  Object.keys(defaultConfig).forEach((key) => {
    mergeField(key);
  });

  function mergeField(key: string) {
    const strategy = strategyMap[key] || defaultStrategy;
    config[key] = strategy(defaultConfig[key], customConf[key]);
  }

  return config;
}
