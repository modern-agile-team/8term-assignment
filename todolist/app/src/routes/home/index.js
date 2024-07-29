"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);

router.get("/login/check", ctrl.process.check); // 조회
router.post("/login", ctrl.process.login); // 추가
router.delete("/login/delete", ctrl.process.delete); // 삭제
router.patch("/login/edit", ctrl.process.edit); // 수정

module.exports = router;
