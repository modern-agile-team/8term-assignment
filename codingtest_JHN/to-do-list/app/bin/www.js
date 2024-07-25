"use strict";
//서버띄워주는 곳

const app = require("../app");
const PORT = 3000;

app.listen(PORT, () => {
  console.log("서버 가동");
});
