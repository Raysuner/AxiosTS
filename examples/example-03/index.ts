import axios from '../../src';

axios({
  method: 'post',
  url: '/example-03/post',
  data: {
    a: 1,
    b: 2
  }
});

const paramsString = 'q=URLUtils.searchParams&topic=api';
const searchParams = new URLSearchParams(paramsString);

axios({
  method: 'post',
  url: '/example-03/post',
  data: searchParams
});

axios({
  method: 'post',
  url: '/example-03/post',
  data: {
    test: 'promise',
    then: 'then',
    catch: 'catch'
  }
}).then(console.log);
