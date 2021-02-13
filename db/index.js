const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "student",
  password: "student",
  database: "grocery",
});

connection.connect();

module.exports = connection;

//mysql -u student -p