export const toString = Object.prototype.toString;

export function isDate(value: any): value is Date {
  return toString.call(value) === '[object Date]';
}

export function isObject(value: any) {
  return value != null && typeof value === 'object';
}

export function isPlainObject(value: any) {
  return toString.call(value) === '[object Object]';
}
