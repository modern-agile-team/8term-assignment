"use strict";

const db = require("../config/db");

class List {
  constructor(body) {
    this.body = body;
  }

  async createList() {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO list (is_check , description) VALUES ( ? , ? )";
      db.query(
        query,
        [this.body.is_check, this.body.description],
        (err, data) => {
          if (err) reject(`${err}`);
          resolve({ success: true, data });
        }
      );
    });
  }

  async getLists() {
    return new Promise((resolve, reject) => {
      const query = "SELECT id , is_check , description FROM list";
      db.query(query, (err, data) => {
        if (err) reject(`${err}`);
        resolve({ success: true, data });
      });
    });
  }

  async updateList(id) {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE list SET description = ? , is_check = ? where id = ?;";
      db.query(
        query,
        [this.body.description, this.body.is_check, id],
        (err, data) => {
          if (err) reject(`${err}`);
          resolve({ success: true, data });
        }
      );
    });
  }

  async deleteList(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM list WHERE id = ?";
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        resolve({ success: true, data });
      });
    });
  }
}

module.exports = List;
