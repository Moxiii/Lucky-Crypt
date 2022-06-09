function sql() {
  var mysql = require("mysql");
  // config de la BDD
  var connection = mysql.connection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
  });
}
