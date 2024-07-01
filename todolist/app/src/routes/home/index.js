"use strict";

const express = require("express");
const ctrl = require("./home.ctrl");

const router = express.Router();
router.get("/", ctrl.output.home);
router.post("/", ctrl.process.addList);
router.delete("/", ctrl.process.deleteList);
router.patch("/", ctrl.process.updateList);
module.exports = router;
