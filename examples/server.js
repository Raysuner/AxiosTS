const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');

const app = express();
const router = express.Router();
const complier = webpack(webpackConfig);

app.use(
  webpackDevMiddleware(complier, {
    publicPath: '/dist/',
    stats: {
      colors: true,
      chunks: false
    }
  })
);
app.use(webpackHotMiddleware(complier));
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

router.get('/base/get', (req, res) => {
  res.json(req.query);
});

router.post('/base/post', (req, res) => {
  res.json(req.body);
});

router.get('/error/get', (req, res) => {
  res.json(req.query);
});

router.post('/error/post', (req, res) => {
  res.json(req.body);
});

router.get('/error/get', function (req, res) {
  if (Math.random() > 0.5) {
    res.json({
      msg: `hello world`
    });
  } else {
    res.status(500);
    res.end();
  }
});

router.get('/error/timeout', function (req, res) {
  setTimeout(() => {
    res.json({
      msg: `hello world`
    });
  }, 3000);
});

router.get('/interceptor/get', function (req, res) {
  res.end('hello');
});

app.listen(8000, () => {
  console.log(`server listen at port 8000, press ctrl + c to stop`);
});
