"use strict";
//storage 데이터를 어떻게 보관/관리하는 지

const db = require("../config/db");

class ToDoStorage {
  //class ,   함수들 정의 / async / try catch

  static save(content) {
    return new Promise((resolve, reject) => {
      //resolve - 성공 , reject - 실패
      const query = "INSERT INTO lists(contents) VALUES(?);";
      db.query(query, [content], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }

  static load() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM lists;";
      db.query(query, (err, results) => {
        if (err) reject(`${err}`);
        else resolve(results);
      });
    });
  }

  static delete(no) {
    // console.log(no);
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM lists WHERE no = ?;";
      db.query(query, [no], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }

  static update(no, newContent) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE lists SET contents = ? WHERE no = ?;";
      db.query(query, [newContent, no], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = ToDoStorage;
