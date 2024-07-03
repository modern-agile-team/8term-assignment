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
      const { listno } = req.params;
      const response = ListStorage.deleteList(listno);
      return response;
    } catch (err) {
      return res.Json({ success: false, msg: "삭제실패" });
    }
  },
  addList: (req, res) => {
    const value = req.body.value;
    const { listno } = req.params;
    try {
      if (!value) {
        return res.json({
          success: false,
          msg: "아무것도 입력하지 않았습니다.",
        });
      }
      ListStorage.createList(listno, value);
      return res.json({ success: true });
    } catch (err) {
      return res.json({ success: false, msg: "다시 입력하세요" });
    }
  },
  updateList: (req, res) => {
    const { listno } = req.params;
    const column = req.body.column;
    try {
      if (column === "check") {
        const value = req.body.value;

        const response = ListStorage.updateCheck(listno, value);
        return response;
      }
      if (column === "description") {
        const value = req.body.value;
        if (!value) {
          return res.json({
            success: false,
            msg: "값을 입력해주세요",
          });
        }
        const response = ListStorage.updateText(listno, value);
        return response;
      }
    } catch (err) {
      return res.json({ success: false, msg: "오류발생" });
    }
  },
};
module.exports = {
  output,
  process,
};
