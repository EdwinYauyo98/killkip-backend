const config = require('./config');
const mysql = require('mysql');

module.exports = () =>{
    return database = mysql.createConnection(config.mysqlConfig);
}