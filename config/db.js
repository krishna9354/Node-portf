// server/config/db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'portfolio_user',
  password: 'Root-Admin@69',
  database: 'portfolio_db',
});

module.exports = pool;
