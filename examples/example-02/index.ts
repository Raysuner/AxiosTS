import axios from '../../src/typing';

axios({
  url: '/example-02/get',
  params: {
    foo: ['bar', 'baz']
  }
});

axios({
  method: 'get',
  url: '/example-02/get',
  params: {
    foo: {
      bar: 'baz'
    }
  }
});

const date = new Date();

axios({
  method: 'get',
  url: '/example-02/get',
  params: {
    date
  }
});

axios({
  method: 'get',
  url: '/example-02/get',
  params: {
    foo: '@:$, '
  }
});

axios({
  method: 'get',
  url: '/example-02/get',
  params: {
    foo: 'bar1',
    baz: null
  }
});

axios({
  method: 'get',
  url: '/example-02/get#hash',
  params: {
    foo: 'bar2'
  }
});

axios({
  method: 'get',
  url: '/example-02/get?foo=bar',
  params: {
    bar: 'baz'
  }
});
