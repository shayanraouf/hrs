const { Sequelize } = require('sequelize');
const RoomModel = require('../models/Room')
const GuestModel = require('../models/Guest')

const keys = require('../config/keys');
const mysql = keys.mysql

const sequelize = new Sequelize(mysql.database, mysql.user, mysql.password, {
    host: mysql.host,
    dialect: 'mysql',
    logging: console.log
});

const Room = RoomModel(sequelize, Sequelize); 
const Guest = GuestModel(sequelize, Sequelize); 

sequelize.sync().then(() => {
    console.log(`new table have been created`);
});

module.exports = Room, Guest;