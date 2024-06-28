"use strict";
//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); //루트로 오면 홈으로 보 내주는 미들웨어임
module.exports = app;
