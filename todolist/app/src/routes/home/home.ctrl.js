"use strict";

const List = require("../../models/List");

const output = {
  hello: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  check: async (req, res) => {
    // 조회
    const list = new List(req.body);
    const response = await list.check();

    return res.json(response);
  },

  login: async (req, res) => {
    // 추가
    const list = new List(req.body);
    const response = await list.login();

    return res.json(response);
  },

  delete: async (req, res) => {
    //삭제
    const list = new List(req.body);
    const response = await list.delete();

    return res.json(response);
  },

  edit: async (req, res) => {
    // 수정
    const list = new List(req.body);
    const response = await list.edit();

    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
