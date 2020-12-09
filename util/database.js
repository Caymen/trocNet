const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete', 'root', 'Numero09', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;