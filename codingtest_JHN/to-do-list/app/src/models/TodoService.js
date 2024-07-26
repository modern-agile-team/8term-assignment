"use strict";

const { response } = require("express");
const todoStorage = require("./TodoStorage");

class TodoService {
  constructor(body) {
    this.body = body;
  }

  async todolist() {
    const todo = this.body;
    try {
      const todolist = await todoStorage.save(!!!);
      return response;
    } catch (err) {
      return { success: false, err} ;
    }
  }
}

// const a = new TodoList("asdasdss");

// console.log(a);

// a.todolist();

// console.log(a.body);

module.exports = TodoService;
