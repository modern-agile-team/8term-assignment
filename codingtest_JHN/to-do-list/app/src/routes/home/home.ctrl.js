"use strict";

const home = (req, res) => {
  res.render("home/index");
};

const todolist = (req, res) => {
  res.render("home/todolist");
};

module.exports = {
  home,
  todolist,
};
