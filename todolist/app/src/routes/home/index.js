"use strict";

const express = require("express");
const ctrl = require("./home.ctrl");
const router = express.Router();
router.get("/", ctrl.output.home);
router.post("/", ctrl.process.crudController); //루트로 들어온 요청을 CRUD로 보냄
module.exports = router;
