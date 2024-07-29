"use strict";

const db = require("../config/db");

class ListStorage {
  static getListInfo() {
    //조회
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM lists";
      db.query(query, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }

  static async save(listInfo) {
    // 추가
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO lists(id, description, is_check) VALUES(?, ?, ?);";
      db.query(
        query,
        [listInfo.id, listInfo.description, listInfo.is_check],
        (err, data) => {
          if (err) reject(err);
          resolve(data);
        }
      );
    });
  }

  static async delete(listInfo) {
    // 삭제
    return new Promise((resolve, reject) => {
      console.log(listInfo);
      const { id } = listInfo;
      const query = "DELETE FROM lists WHERE id = ?;";
      db.query(query, [id], (err) => {
        if (err) reject(err);
        resolve({ success: true });
      });
    });
  }

  static async editsave(listInfo) {
    // 수정
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE lists SET description = ?, is_check = ? WHERE id = ?;";
      db.query(
        query,
        [listInfo.description, listInfo.is_check, listInfo.id],
        (err) => {
          if (err) reject(err);
          resolve({ success: true });
        }
      );
    });
  }
}

module.exports = ListStorage;
