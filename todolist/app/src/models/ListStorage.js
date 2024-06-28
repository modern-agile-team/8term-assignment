"use strict";

const db = require("../config/db");
class ListStorage {
  static saveInfo(text) {
    return new Promise((resolve, reject) => {
      const sql =
        "INSERT INTO list(description,is_check,in_date) VALUES(?,?,NOW())";
      const today = db.query(sql, [text, 1], (err) => {
        if (err) reject(err);
        resolve({ success: true });
      });
    });
  }

  static getListInfo(text) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM list";
      const today = db.query(sql, [text, 1], (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }
}
module.exports = ListStorage;
