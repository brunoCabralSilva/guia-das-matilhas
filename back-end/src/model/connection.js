const mysql = require('mysql2/promise');
require('dotenv').config();
const MYSQLDATABASE = 'railway';
// const MYSQLDATABASE = 'guia_das_matilhas';
const MYSQLHOST = 'containers-us-west-49.railway.app';
// const MYSQLHOST = 'localhost';
const MYSQLUSER = 'root';
const MYSQLPORT = 7558;
// const MYSQLPORT = 3307;
const MYSQLPASSWORD = 'kdZI082Y6hibpF5fHaWl';
// const MYSQLPASSWORD = 'root';

const connection = mysql.createPool({
  host: MYSQLHOST,
  user: MYSQLUSER,
  port: MYSQLPORT,
  password: MYSQLPASSWORD,
  database: MYSQLDATABASE,
});

module.exports = connection;