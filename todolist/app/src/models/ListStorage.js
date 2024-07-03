"use strict";

const db = require("../config/db");

class ListStorage {
  static createList(id, text) {
    const listNo = Number(id) + 1;
    console.log(listNo, text);
    return new Promise((resolve, reject) => {
      const sql =
        "INSERT INTO list(id,description,is_check,in_date) VALUES(?,?,?,NOW())";
      db.query(sql, [listNo, text, 1], (err) => {
        if (err) reject(err);
        resolve({ success: true });
      });
    });
  }

  static getListInfo(text) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM list";
      db.query(sql, [text, 1], (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }

  static deleteList(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM list WHERE id = ?";
      db.query(sql, [id], (err) => {
        if (err) {
          reject(err);
        }
        resolve({ success: true });
      });
    });
  }

  static updateCheck(id, value) {
    return new Promise((resolve, reject) => {
      const sql = "UPDATE list SET is_check = ? WHERE id = ?";
      db.query(sql, [value, id], (err) => {
        if (err) reject(err);
        resolve({ success: true });
      });
    });
  }

  static updateText(id, value) {
    return new Promise((resolve, reject) => {
      const sql = "UPDATE list SET description = ? WHERE id = ?";
      db.query(sql, [value, id], (err) => {
        if (err) reject(err);
        resolve({ success: true });
      });
    });
  }
}
module.exports = ListStorage;
