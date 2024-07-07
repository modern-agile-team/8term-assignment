'use strict';

const express = require('express');
const router = express.Router();
const db = require('../../config/db');

const ctrl = require('./home.ctrl');

router.get('/', ctrl.home);

module.exports = router;
