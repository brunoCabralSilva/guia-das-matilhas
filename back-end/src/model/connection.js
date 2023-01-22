const mysql = require('mysql2/promise');
require('dotenv').config();
// const MYSQLDATABASE = 'railway';
const MYSQLDATABASE = 'guiadasmatilhas';
// const MYSQLHOST = 'containers-us-west-49.railway.app';
const MYSQLHOST = 'guiadasmatilhas-01.cpx1yglrsiaj.us-east-1.rds.amazonaws.com';
const MYSQLUSER = 'root';
// const MYSQLPORT = 7558;
const MYSQLPORT = 3306;
const MYSQLPASSWORD = 'garounordestedentrodaKombi22012023';

try {
const connection = mysql.createPool({
  host: MYSQLHOST,
  user: MYSQLUSER,
  port: MYSQLPORT,
  password: MYSQLPASSWORD,
  database: MYSQLDATABASE,
});
module.exports = connection;
} catch(error) {
  console.log(error.message);
}
