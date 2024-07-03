"use strict";
const ListStorage = require("../../models/ListStorage");

const output = {
  home: (req, res) => {
    try {
      res.render("home/index.ejs");
    } catch (err) {
      return res.json({ success: false, msg: err });
    }
  },
  loadList: async (req, res) => {
    const list = await ListStorage.getListInfo();
    return res.json({ success: true, data: list });
  },
};

const process = {
  deleteList: (req, res) => {
    try {
      const id = req.body.id;
      ListStorage.deleteList(id);
      return res.json({
        success: true,
      });
    } catch (err) {
      return res.Json({ success: false, msg: err });
    }
  },
  addList: (req, res) => {
    try {
      const text = req.body.text;
      const id = req.body.id;
      if (text === "") {
        return res.json({
          success: false,
          msg: "아무것도 입력하지 않았습니다.",
        });
      }
      ListStorage.saveInfo(id, text);
      return res.json({ success: true });
    } catch (err) {
      return res.Json({ success: false, msg: err });
    }
  },
  updateList: (req, res) => {
    try {
      const column = req.body.col;
      if (column === "check") {
        const id = req.body.id,
          value = req.body.value;
        ListStorage.updateCheck(id, value);
        return res.json({ success: true });
      }
      if (column === "description") {
        const id = req.body.id,
          value = req.body.value;
        ListStorage.updateText(id, value);
        return res.json({ success: true });
      }
    } catch (err) {
      return res.Json({ success: false, msg: err });
    }
  },
};
module.exports = {
  output,
  process,
};
