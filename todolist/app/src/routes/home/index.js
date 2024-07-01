"use strict";

const express = require("express");
const ctrl = require("./home.ctrl");

const router = express.Router();

router
  .route("/")
  .get(ctrl.output.home)
  .post(ctrl.process.addList)
  .delete(ctrl.process.deleteList)
  .patch(ctrl.process.updateList);

module.exports = router;
