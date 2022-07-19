import axios from "../../src";

axios({
  method: "post",
  url: "/example-03/post",
  data: {
    a: 1,
    b: 2,
  },
});
