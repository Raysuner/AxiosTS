import axios from '../../src/typing';

axios({
  method: 'get',
  url: '/base/get',
  params: {
    a: 1,
    b: 2
  }
});

axios({
  url: '/base/get',
  params: {
    foo: ['bar', 'baz']
  }
});

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: {
      bar: 'baz'
    }
  }
});

const date = new Date();

axios({
  method: 'get',
  url: '/base/get',
  params: {
    date
  }
});

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: '@:$, '
  }
});

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: 'bar1',
    baz: null
  }
});

axios({
  method: 'get',
  url: '/base/get#hash',
  params: {
    foo: 'bar2'
  }
});

axios({
  method: 'get',
  url: '/base/get?foo=bar',
  params: {
    bar: 'baz'
  }
});

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
});

const paramsString = 'q=URLUtils.searchParams&topic=api';
const searchParams = new URLSearchParams(paramsString);

axios({
  method: 'post',
  url: '/base/post',
  data: searchParams
});

axios({
  method: 'post',
  url: '/base/post',
  data: {
    test: 'promise',
    then: 'then',
    catch: 'catch'
  }
}).then(console.log);
