"use strict";

const List = require("../../models/List");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
};

const process = {
  createList: async (req, res) => {
    const list = new List(req.body);
    const response = await list.createList();
    return res.json(response);
  },

  getLists: async (req, res) => {
    const list = new List();
    const response = await list.getLists();
    return res.json(response);
  },

  updateList: async (req, res) => {
    const list = new List(req.body);
    const response = await list.updateList(Number(req.params.id));
    return res.json(response);
  },

  deleteList: async (req, res) => {
    const list = new List();
    const response = await list.deleteList(Number(req.params.id));
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
