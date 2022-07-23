import { isPlainObject } from "./type";

export function transformRequestData(value: any) {
  if (isPlainObject(value)) {
    return JSON.stringify(value);
  }
  return value;
}
