"use strict";

const todoStorage = require("./TodoStorage");

class TodoService {
  constructor(body) {
    this.content = body.content;
  }

  async todolist() {
    const content = this.content;

    try {
      const response = await todoStorage.save(content);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}

// const a = new TodoList("asdasdss");

// console.log(a);

// a.todolist();

// console.log(a.body);

module.exports = TodoService;
