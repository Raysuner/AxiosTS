import axios from '../../src/typing';

axios.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.test += '1';
  }
  return config;
});
axios.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.test += '2';
  }
  return config;
});
axios.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.test += '3';
  }
  return config;
});

axios.interceptors.response.use((res) => {
  res.data += '1';
  return res;
});
const interceptor = axios.interceptors.response.use((res) => {
  res.data += '2';
  return res;
});
axios.interceptors.response.use((res) => {
  res.data += '3';
  return res;
});

axios.interceptors.response.eject(interceptor);

axios({
  url: '/interceptor/get',
  method: 'get',
  headers: {
    test: ''
  }
}).then((res) => {
  console.log(res.data);
});
