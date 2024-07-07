'use strict';

const express = require('express');
const db = require('../../config/db');
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get('/', ctrl.home);

module.exports = router;
