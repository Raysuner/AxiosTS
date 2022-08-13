function extend<T, D>(to: T, from: D): T & D {
  for (const key in from) {
    to[key as string] = from[key];
  }
  return to as T & D;
}

export default extend;
