const Sequelize = require('sequelize');

require('dotenv').config();

//create connection to our database, pass in your mySQL info for username and password
const sequelize = new Sequelize('just_tech_news_db', 'root', 'Brave2114!', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;