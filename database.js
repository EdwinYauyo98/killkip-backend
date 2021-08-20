const config = require('./config');
const mysql = require('mysql');

module.exports = () => {
    return mysql.createPool({
        connectionLimit: 10,
        host: '35.209.204.163',
        user: 'u3r93gq4a5p9l',
        password: '2@Gj#34d21N3',
        database: 'dbverjyqgshgtb'
    });
}