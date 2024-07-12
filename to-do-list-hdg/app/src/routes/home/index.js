"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);

router.post("/lists", ctrl.process.lists);

module.exports = router;
