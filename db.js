// db.js
const mysql = require("mysql2");

// Database connection details
const db = mysql.createConnection({
  host: "dbestore.c96gcqkucapa.eu-north-1.rds.amazonaws.com",
  user: "admin",
  password: "banitiger",
  port: "3306",
  database: "dbestore",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

module.exports = db;
