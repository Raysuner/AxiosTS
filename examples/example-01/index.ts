import axios from '../../src/typing';

axios({
  method: 'get',
  params: {
    a: 1,
    b: 2
  },
  url: '/example-01/get'
});
