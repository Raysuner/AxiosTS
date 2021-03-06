const express = require("express");
const bodyParser = require("body-parser");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackConfig = require("./webpack.config");

const app = express();
const router = express.Router();
const complier = webpack(webpackConfig);

app.use(
  webpackDevMiddleware(complier, {
    publicPath: "/dist/",
    stats: {
      colors: true,
      chunks: false,
    },
  })
);
app.use(webpackHotMiddleware(complier));
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

router.get("/example-01/get", (req, res) => {
  res.json({
    msg: "hello world",
  });
});

router.get("/example-02/get", (req, res) => {
  res.json(req.query);
});

router.post("/example-03/post", (req, res) => {
  res.json(req.body);
});

app.listen(8000, () => {
  console.log(`server listen at port 8000, press ctrl + c to stop`);
});
