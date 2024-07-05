'use strict';

// 모듈
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('To do list');
});

app.listen(3000, () => {
  console.log('서버 가동');
});
