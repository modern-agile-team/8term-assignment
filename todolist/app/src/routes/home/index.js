"use strict";

const express = require("express");
const ctrl = require("./home.ctrl");

const router = express.Router();

router.route("/").get(ctrl.output.home);
router.delete("/lists/:listno", ctrl.process.deleteList);
router.post("/lists/:listno", ctrl.process.addList);
router.get("/lists", ctrl.output.loadList);
router.patch("/lists/:listno", ctrl.process.updateList);
module.exports = router;
