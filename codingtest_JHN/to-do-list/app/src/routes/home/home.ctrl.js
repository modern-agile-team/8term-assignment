"use strict";

const TodoService = require("../../models/TodoService");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  todolist: (req, res) => {
    res.render("home/todolist");
  },
};

const process = {
  todolist: async (req, res) => {
    console.log(req.body);
    const todoService = new TodoService(req.body);

    console.log(todoService);
    const response = await todoService.todolist();

    // return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
