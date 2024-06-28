"use strict";
const ListStorage = require("../../models/ListStorage");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
};

const process = {
  crudController: (req, res) => {
    const crud = req.body.id;
    if (crud === "add") {
      ListStorage.saveInfo(req.body.text);
      ListStorage.getListInfo();
      return res.json({
        success: true,
        text: req.body.text,
      });
    }
  },
};
module.exports = {
  output,
  process,
};
