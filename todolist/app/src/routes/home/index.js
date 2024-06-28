"use strict";

const express = require("express");
const ctrl = require("./home.ctrl");
const router = express.Router();
router.get("/", ctrl.output.home);
module.exports = router;
