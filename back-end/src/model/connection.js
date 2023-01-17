"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql2/promise');
require('dotenv').config();
var connection = mysql.createPool({
    host: process.env.MYSQLHOST || 'localhost',
    user: process.env.MYSQLUSER || 'root',
    port: process.env.MYSQLPORT || 3307,
    password: process.env.MYSQLPASSWORD || 'root',
    database: process.env.MYSQLDATABASE || 'guia_das_matilhas',
});
exports.default = connection;
