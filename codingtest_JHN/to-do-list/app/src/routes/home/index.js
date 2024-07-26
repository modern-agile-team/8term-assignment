"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/todolist", ctrl.output.todolist);
router.post("/todolist", ctrl.process.todolist);

module.exports = router;
