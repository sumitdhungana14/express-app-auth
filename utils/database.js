const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'info', 
    'root',
    '',
    {
        dialect: 'mysql',
        host: 'localhost'
    })

module.exports = sequelize;