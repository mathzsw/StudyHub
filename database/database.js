const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/studyhub.sqlite',
    logging: false
});

module.exports = sequelize;