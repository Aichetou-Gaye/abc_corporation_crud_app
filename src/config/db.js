const mysql = require("mysql2/promise");

const connPool = mysql.createPool({
  host: "localhost",
  user: "bideew",
  password: "GayePro14",
  database: "abc_business_management",
  waitForConnections: true,
  connectionLimit: 100,
  connectTimeout: 100000,
});

// connPool.getConnection().then(() => {
//     console.log("CONNECTED");
// });
  

module.exports = connPool;
