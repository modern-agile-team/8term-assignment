"use strict";

const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "modernheena",
  database: "TDL",
});

db.connect();

module.exports = db;
