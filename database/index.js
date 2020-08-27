require('dotenv').config()
const mysql = require('mysql')
const env = process.env;

const db = mysql.createConnection({
  port: env.DB_PORT,
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASS,
  database: env.MYSQL_DB
})
db.connect(function(err) {
  console.log("test connection!!");
  if (err) throw err;
  console.log('connection successfully');
})

module.exports = db
