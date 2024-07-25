"use strict";

const db = require("../config/db");

class ListStorage {
  // static #getListInfo(data, description) {
  //   const lists = JSON.parse(data);
  //   const idx = lists.description.indexOf(description);
  //   const listKeys = Object.keys(lists);
  //   const listInfo = listKeys.reduce((newList, info) => {
  //     newList[info] = lists[info][idx];
  //     return newList;
  //   }, {});
  //   return listInfo;
  // }

  // static #getLists(data) {
  //   const lists = JSON.parse(data);
  //   return lists;
  // }

  static getListInfo(description) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM lists";
      db.query(query, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }

  static async save(listInfo) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO lists(id, description, is_check) VALUES(?, ?, ?);";
      db.query(
        query,
        [listInfo.id, listInfo.description, listInfo.is_check],
        (err) => {
          if (err) reject(err);
          resolve({ success: true });
        }
      );
    });
  }

  static async delete(listInfo) {
    return new Promise((resolve, reject) => {
      const { id } = listInfo;
      const query = "DELETE FROM lists WHERE id = ?;";
      db.query(query, [id], (err) => {
        if (err) reject(err);
        resolve({ success: true });
      });
    });
  }

  static async editsave(listInfo) {
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
