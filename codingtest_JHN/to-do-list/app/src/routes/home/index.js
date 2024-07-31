"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);

//back
router.post("/lists", ctrl.process.createlist);
router.get("/lists", ctrl.process.getlists);
router.delete("/lists/:no", ctrl.process.delLists);
router.patch("/lists/:no", ctrl.process.updateLists);

//
module.exports = router;
