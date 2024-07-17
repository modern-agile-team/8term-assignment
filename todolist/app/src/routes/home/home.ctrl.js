"use strict";
const ListStorage = require("../../models/ListStorage");

const output = {
  // /경로로 GET요청이 들어왔을 때 ejs파일을 보내줌
  home: (req, res) => {
    try {
      res.render("home/index.ejs");
    } catch (err) {
      console.log(err);
      return res.json({ success: false, msg: "랜더링 오류" });
    }
  },
  //load경로로 GET 요청 시 데이터베이스 정보 보내줌
  loadList: async (req, res) => {
    try {
      const list = await ListStorage.getListInfo();
      return res.json({ success: true, data: list });
    } catch (err) {
      console.log(err);
      return res.json({ success: false, msg: "불러오기에 실패하였습니다." });
    }
  },
};

const process = {
  //리스트 삭제
  deleteList: (req, res) => {
    try {
      const { listno } = req.params;
      const response = ListStorage.deleteList(listno);
      return response;
    } catch (err) {
      console.log(err);
      return res.Json({ success: false, msg: "삭제실패" });
    }
  },
  //리스트 추가
  addList: (req, res) => {
    try {
      const value = req.body.value;
      const { listno } = req.params;
      //입력값이 없을 때
      if (!value) {
        return res.json({
          success: false,
          msg: "아무것도 입력하지 않았습니다.",
        });
      }
      ListStorage.createList(listno, value);
      return res.json({ success: true });
    } catch (err) {
      //에러가 발생했을 때
      console.log(err);
      return res.json({ success: false, msg: "추가실패" });
    }
  },
  //리스트 수정
  updateList: (req, res) => {
    try {
      const { listno } = req.params;
      const column = req.body.column;
      //체크 수정
      if (column === "check") {
        const value = req.body.value;
        const response = ListStorage.updateCheck(listno, value);
        return response;
      }
      //텍스트 수정
      if (column === "description") {
        const value = req.body.value;
        //값이 없을 때
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
      //에러 발생 시
      console.log(err);
      return res.json({ success: false, msg: "수정실패" });
    }
  },
};
module.exports = {
  output,
  process,
};
