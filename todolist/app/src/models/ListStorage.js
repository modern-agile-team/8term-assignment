"use strict";

const db = require("../config/db");
class ListStorage {
  static saveInfo(text) {
    const sql =
      "INSERT INTO list(description,is_check,in_date) VALUES(?,?,NOW())";
    const today = db.query(sql, [text, 1], (err, data) => {
      console.log(err);
    });
  }

  static getListInfo(text) {
    const sql = "SELECT * FROM list";
    const today = db.query(sql, [text, 1], (err, data) => {
      console.log(data);
    });
  }
}
module.exports = ListStorage;
