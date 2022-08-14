import { Method } from '../typing';
import deepMerge from './deepMerge';

export default function flattenHeaders(
  headers: Record<string, any>,
  method: Method
): Record<string, any> {
  if (!headers) {
    return headers;
  }
  const mergedHeaders = deepMerge(
    headers.common || {},
    headers[method] || {},
    headers
  );

  const deleteProps = [
    'delete',
    'get',
    'head',
    'options',
    'post',
    'put',
    'patch',
    'common'
  ];
  deleteProps.forEach((prop) => {
    delete mergedHeaders[prop];
  });

  return mergedHeaders;
}
