"use strict";

//모듈
const express = require("express");
const app = express();

const PORT = 3001;

//라우팅
const home = require("./routes/home");

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home);

module.exports = app;
