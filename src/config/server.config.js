const dotenv = require('dotenv');
dotenv.config();


// All the Private information stored in .env file
module.exports = {
    PORT : process.env.PORT,
    USER : process.env.USER,
    PASS : process.env.PASS,
    HOST : process.env.HOST,
    DB : process.env.DB
}