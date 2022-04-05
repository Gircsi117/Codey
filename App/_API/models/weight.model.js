const { Sequelize, Model, DataTypes } = require('sequelize');
require('dotenv').config;
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  dialect: 'mysql',
  dialectOptions: {
    connectTimeout: 5000,
  },
});

class Weight extends Model {}
Weight.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    suly: DataTypes.INTEGER,
    datum: DataTypes.DATEONLY,
    felhasznalo_id: DataTypes.INTEGER,
  },
  { sequelize, tableName: 'testsulyok', timestamps: false }
);

module.exports = Weight;
