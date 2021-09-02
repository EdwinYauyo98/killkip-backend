const dotenv = require('dotenv');

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    HOST_MYSQL,
    USERNAME,
    PASSWORD,
    DATABASE
} = process.env;


module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    mysqlConfig: {
        host: HOST_MYSQL,
        username: USERNAME,
        password: PASSWORD,
        database: DATABASE
    }
}