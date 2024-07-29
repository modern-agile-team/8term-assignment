"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.todolist);

//back
router.post("/todolist", ctrl.process.todolist);
router.get("/todolist", ctrl.inputtable.todolist);

//
module.exports = router;
