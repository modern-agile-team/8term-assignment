"use strict";

const db = require("../config/db");

class ToDoStorage {
  //class ,   함수들 정의 / async / try catch

  static save(listInfo) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO lists(no, contents, is_checked, date) VALUES(?,?,?,?);";
      db.query(
        query,
        [listInfo.no, listInfo.contents, listInfo.is_checked, listInfo.date],
        (err) => {
          if (err) reject(`${err}`);
          else esolve({ success: true });
        }
      );
    });
  }
}

module.exports = ToDoStorage;
