require('dotenv').config();
const configs = {
    PORT: process.env.PORT,
    DB_HOSTNAME: process.env.DB_HOSTNAME,
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    PUBLISHABLE_KEY:process.env.PUBLISHABLE_KEY,
    SECRET_KEY:process.env.SECRET_KEY
};

Object.freeze(configs);
module.exports = configs;