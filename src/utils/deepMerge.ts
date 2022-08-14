import { isPlainObject } from './type';

export default function deepMerge(...objList: any[]): any {
  const mergeResult = Object.create(null);
  objList.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      if (isPlainObject(value)) {
        if (isPlainObject(mergeResult[key])) {
          mergeResult[key] = deepMerge(mergeResult[key], value);
        } else {
          mergeResult[key] = deepMerge({}, value);
        }
      } else {
        mergeResult[key] = value;
      }
    });
  });
  return mergeResult;
}
