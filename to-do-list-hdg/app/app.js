"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//url을 통해 전달되는 데이터에 공백이나 한글이 포함될 경우 제대로 인식하지 못하는 문제를 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home);

module.exports = app;
