"use strict";

const db = require("../config/db");

class List {
  constructor(body) {
    this.body = body;
  }

  async createList() {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO list (is_check , description) VALUES ( ? , ?)";
      db.query(
        query,
        [this.body.in_check, this.body.description],
        (err, data) => {
          if (err) reject(`${err}`);
          resolve({ success: true });
        }
      );
    });
  }

  async getLists() {
    return new Promise((resolve, reject) => {
      const query = "SELECT id , is_check , description FROM list";
      db.query(query, (err, data) => {
        if (err) reject(`${err}`);
        resolve(data);
      });
    });
  }

  async updateList() {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE list SET description = ? , in_check = ? where id = ?;";
      db.query(query, [, ,], (err, data) => {
        // 이곳 수정이 필요함 ^
        if (err) reject(`${err}`);
        resolve(data);
      });
    });
  }

  deleteList() {}
}

module.exports = List;
