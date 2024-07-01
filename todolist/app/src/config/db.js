const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "doyoon",
  password: "1234",
  database: "todolist",
});
db.connect();
module.exports = db;
