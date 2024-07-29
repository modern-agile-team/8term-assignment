"use strict";

const db = require("../config/db");

class ToDoStorage {
  //class ,   함수들 정의 / async / try catch

  static save(content) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO lists(contents) VALUES(?);";
      db.query(query, [content], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = ToDoStorage;
