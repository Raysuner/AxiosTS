function extend<T, D>(to: T, from: D): T & D {
  Object.keys(from).forEach((key) => {
    to[key] = from[key];
  });
  return to as T & D;
}

export default extend;
