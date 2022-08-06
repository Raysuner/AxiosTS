import { isPlainObject } from './type';

export function transformRequestData(value: any) {
  if (isPlainObject(value)) {
    return JSON.stringify(value);
  }
  return value;
}

export function transformResponseData(value: any) {
  if (typeof value.data === 'string') {
    try {
      return {
        ...value,
        data: JSON.parse(value.data)
      };
    } catch (error) {
      console.error(error);
    }
  }
  return value;
}
