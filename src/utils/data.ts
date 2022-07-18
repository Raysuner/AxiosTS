import { isPlainObject } from "./base";

export function transformRequestData(value: any) {
  if (isPlainObject(value)) {
    return JSON.stringify(value);
  }
  return value;
}
