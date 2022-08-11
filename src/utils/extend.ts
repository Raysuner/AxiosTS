const MethodList = [
  '_request',
  'request',
  'get',
  'post',
  'head',
  'put',
  'patch',
  'options',
  'delete'
];

function extend<T, D>(to: T, from: D): T & D {
  MethodList.forEach((key) => {
    to[key] = from[key];
  });
  return to as T & D;
}

export default extend;
