"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.get("/login", ctrl.output.edit);

router.post("/login", ctrl.process.login);
router.delete("/login", ctrl.process.delete);
router.patch("/login", ctrl.process.edit);

module.exports = router;
