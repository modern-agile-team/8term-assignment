const mysql = require("mysql2");
require("dotenv").config({ path: "../../.env" });
const db = mysql.createConnection({
  host: process.env.localhost,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
db.connect();
module.exports = db;
