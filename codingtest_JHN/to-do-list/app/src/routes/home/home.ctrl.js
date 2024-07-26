"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  todolist: (req, res) => {
    res.render("home/todolist");
  },
};

const process = {
  todolist: (req, res) => {
    const content = req.body.content;
  },
};

module.exports = {
  output,
  process,
};
