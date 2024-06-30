"use strict";
const ListStorage = require("../../models/ListStorage");

const output = {
  home: async (req, res) => {
    try {
      const list = await ListStorage.getListInfo();
      res.render("home/index", { data: list });
    } catch (err) {
      return { success: false, msg: err };
    }
  },
};

const process = {
  crudController: async (req, res) => {
    try {
      const crud = req.body.id;
      const text = req.body.text;
      if (crud === "add") {
        await ListStorage.saveInfo(text);
        return res.json({
          success: true,
          text: text,
        });
      }
    } catch (err) {
      return { success: false, msg: err };
    }
  },
};
module.exports = {
  output,
  process,
};
