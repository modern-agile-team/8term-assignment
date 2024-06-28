"use strict";
const ListStorage = require("../../models/ListStorage");

const output = {
  home: async (req, res) => {
    const list = await ListStorage.getListInfo();
    console.log(list);
    res.render("home/index", { data: JSON.stringify(list) });
  },
};

const process = {
  crudController: async (req, res) => {
    const crud = req.body.id;
    const text = req.body.text;
    if (crud === "add") {
      await ListStorage.saveInfo(text);
      return res.json({
        success: true,
        text: text,
      });
    }
  },
};
module.exports = {
  output,
  process,
};
