"use strict";

const express = require("express");
const ctrl = require("./home.ctrl");

const router = express.Router();

router.route("/").get(ctrl.output.home);
router.delete("/delete", ctrl.process.deleteList);
router.post("/add", ctrl.process.addList);
router.get("/load", ctrl.output.loadList);
router.patch("/edit", ctrl.process.updateList);
module.exports = router;
