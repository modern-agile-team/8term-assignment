"use strict";

const List = require("../../models/List");

const output = {
  hello: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },

  edit: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: async (req, res) => {
    const list = new List(req.body);
    const response = await list.login();

    return res.json(response);
  },

  delete: async (req, res) => {
    const list = new List(req.body);
    const response = await list.delete();

    return res.json(response);
  },

  edit: async (req, res) => {
    const list = new List(req.body);
    const response = await list.edit();

    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
