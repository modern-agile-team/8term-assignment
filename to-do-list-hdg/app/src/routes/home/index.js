"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);

router.get("/lists", ctrl.process.getLists);
router.post("/lists", ctrl.process.createList);
router.put("/lists/:id", ctrl.process.updateList);
router.delete("/lists/:id", ctrl.process.deleteList);

module.exports = router;
