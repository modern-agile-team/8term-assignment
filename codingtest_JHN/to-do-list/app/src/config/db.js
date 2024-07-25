"use strict";

const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "todolist",
  port: 3306,
  user: "root",
  password: "modernheena",
  database: "TDL",
});

db.connect();

module.exports = db;
