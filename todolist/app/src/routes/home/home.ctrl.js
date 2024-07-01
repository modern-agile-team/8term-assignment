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
      const crud = req.body.crud;
      if (crud === "add") {
        const text = req.body.text;
        ///text가 없을때 리턴해주는 부분
        if (text === "") {
          return res.json({
            success: false,
            msg: "아무것도 입력하지 않았습니다.",
          });
        }
        //------------------------

        //saveinfo메소드 호출하고 true리턴
        await ListStorage.saveInfo(text);
        return res.json({
          success: true,
        });
      }
      //--------------------

      if (crud === "delete") {
        //id를 얻어와서 delete에 보내고 true 리턴
        const id = req.body.id;
        ListStorage.deleteList(id);
        return res.json({
          success: true,
        });
        //--------------------------------
      }

      if (crud === "update") {
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
