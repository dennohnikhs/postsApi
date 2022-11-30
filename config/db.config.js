const mysql = require("mysql");
const { makeDb } = require("mysql-async-simple");

let db_config = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "udemy_posts",
};

connection = mysql.createConnection(db_config); // Recreate the connection, since
// the old one cannot be reused.

const db = makeDb();

async function executeQuery(sql, fields) {
  try {
    await db.connect(connection);
  } catch (e) {
    console.log("iko error bwana producer", { error: e });
  }

  returnObj = null;

  try {
    returnObj = await db.query(connection, sql, fields);
  } catch (e) {
    // handle exception
  } finally {
  }

  return returnObj;
}

module.exports = {
  connection,
  executeQuery,
};
