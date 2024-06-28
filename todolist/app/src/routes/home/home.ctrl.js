"use strict";

//임시 데이터베이스---- id : doyoon psword : 1234
const list = {
  id: 1,
  description: "공중제비",
  is_check: 1, //0이면 체크하도록
  in_date: "2024-06-28",
};
//임시 데이터베이스 ------

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
};

const process = {
  crudController: (req, res) => {
    const crud = req.body.id;
    if (crud === "add") {
      return res.json({
        success: true,
        crud: "c",
      });
    }
  },
};
module.exports = {
  output,
  process,
};
