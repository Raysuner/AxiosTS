import axios from '../../src/typing';

axios({
  method: 'get',
  params: {
    a: 1,
    b: 2
  },
  url: '/base/get'
});

axios({
  url: '/error/get',
  params: {
    foo: ['bar', 'baz']
  }
});

axios({
  method: 'get',
  url: '/error/get',
  params: {
    foo: {
      bar: 'baz'
    }
  }
});

const date = new Date();

axios({
  method: 'get',
  url: '/error/get',
  params: {
    date
  }
});

axios({
  method: 'get',
  url: '/error/get',
  params: {
    foo: '@:$, '
  }
});

axios({
  method: 'get',
  url: '/error/get',
  params: {
    foo: 'bar1',
    baz: null
  }
});

axios({
  method: 'get',
  url: '/error/get#hash',
  params: {
    foo: 'bar2'
  }
});

axios({
  method: 'get',
  url: '/error/get?foo=bar',
  params: {
    bar: 'baz'
  }
});
