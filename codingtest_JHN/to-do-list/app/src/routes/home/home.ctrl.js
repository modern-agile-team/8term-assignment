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
    const id = req.body.id;
    console.log(id);
  },
};

module.exports = {
  output,
  process,
};
