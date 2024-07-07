'use strict';

// 모듈
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: true }));

// 라우팅
const home = require('./src/routes/home');

// 앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/src/public`));

app.use('/', home);

module.exports = app;
