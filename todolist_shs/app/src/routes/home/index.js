'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home/todolist');
});

module.exports = router;
