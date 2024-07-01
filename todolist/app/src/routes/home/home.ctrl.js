"use strict";
const ListStorage = require("../../models/ListStorage");

const output = {
  home: async (req, res) => {
    try {
      const list = await ListStorage.getListInfo();
      res.render("home/index", { data: list });
    } catch (err) {
      return res.json({ success: false, msg: err });
    }
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
      if (text === "") {
        return res.json({
          success: false,
          msg: "아무것도 입력하지 않았습니다.",
        });
      }
      ListStorage.saveInfo(text);
      return res.json({ success: true });
    } catch (err) {
      return res.Json({ success: false, msg: err });
    }
  },
  updateList: (req, res) => {
    try {
      const col = req.body.column;
      if (col === "is_check") {
        const id = req.body.id,
          value = req.body.value;
        ListStorage.updateCheck(id, value);
        return res.json({ success: true });
      }
      if (col === "description") {
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
