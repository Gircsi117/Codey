const { Sequelize, Model, DataTypes } = require('sequelize');
require('dotenv').config;
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  dialect: 'mysql',
  dialectOptions: {
    connectTimeout: 5000,
  },
});

class Food extends Model {}
Food.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nev: DataTypes.STRING,
    hozzadva: DataTypes.DATEONLY,
    felhasznalo_id: DataTypes.INTEGER,
  },
  { sequelize, tableName: 'etelek', timestamps: false }
);

module.exports = Food;
