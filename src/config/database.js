const mysql = require("mysql2/promise");

const connPool = mysql.createPool({
  host: "localhost",
  user: "user_name",
  password: "password",
  database: "database_name",
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 100000,
});

connPool.getConnection().then(() => {
    console.log("CONNECTED");
});
  

module.exports = connPool;
