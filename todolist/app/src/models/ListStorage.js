"use strict";

const db = require("../config/db");
class ListStorage {
  static saveInfo(text) {
    return new Promise((resolve, reject) => {
      const sql =
        "INSERT INTO list(description,is_check,in_date) VALUES(?,?,NOW())";
      db.query(sql, [text, 1], (err) => {
        if (err) reject(err);
        resolve({ success: true });
      });
    });
  }

  static getListInfo(text) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM list";
      db.query(sql, [text, 1], (err, data) => {
        if (err) reject(err); //에러 Object타입 나중에 수정
        resolve(data);
      });
    });
  }

  static deleteList(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM list WHERE id = ?";
      db.query(sql, [id], (err) => {
        if (err) reject(err);
        resolve({ success: true });
      });
    });
  }
}
module.exports = ListStorage;
