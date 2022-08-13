import { ResolvedFn, RejectedFn, Interceptor } from '../typing';

class InterceptorManager<T> {
  private interceptorList: Array<Interceptor<T> | null> = [];

  use(resolveFn: ResolvedFn<T>, rejectFn: RejectedFn): number {
    this.interceptorList.push({ resolveFn, rejectFn });
    return this.interceptorList.length - 1;
  }

  forEach(fn: (interceptor: Interceptor<T>) => void): void {
    this.interceptorList.forEach((interceptor) => {
      if (interceptor) {
        fn(interceptor);
      }
    });
  }

  eject(id: number): void {
    if (this.interceptorList[id]) {
      this.interceptorList[id] = null;
    }
  }
}

export default InterceptorManager;
