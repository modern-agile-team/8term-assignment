"use strict";

const TodoService = require("../../models/TodoService");

const output = {
  home: (req, res) => {
    return res.render("home/todolist");
  },
};

const process = {
  createlist: async (req, res) => {
    const todoService = new TodoService(req.body);
    const response = await todoService.todolist();

    return res.json(response);
  },

  getlists: async (req, res) => {
    try {
      const todoService = new TodoService();
      const todos = await todoService.showtodo();
      // console.log("Todos fetched: ", todos);

      return res.json(todos);
    } catch (error) {
      console.error("Error fetching todos: ", error);

      return res.status(500).send("Error fetching todos");
    }
  },

  delLists: async (req, res) => {
    try {
      const listno = req.params.no;
      const todoService = new TodoService();
      const response = await todoService.delete(listno);
      return res.json(response);
    } catch (error) {
      return res.json({ success: false, error });
    }
  },

  updateLists: async (req, res) => {
    try {
      const listno = req.params.no;
      const newContent = req.body.newContent;
      const todoService = new TodoService();
      const response = await todoService.update(listno, newContent);
      return res.json(response);
    } catch (error) {
      console.error(error);
      return res.json({ success: false, error });
    }
  },
};

module.exports = {
  output,
  process,
};
