const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    USER : process.env.USER,
    PASS : process.env.PASS,
    HOST : process.env.HOST,
    DB : process.env.DB
}