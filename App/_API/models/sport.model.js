const { Sequelize, Model, DataTypes } = require('sequelize');
require('dotenv').config;
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  dialect: 'mysql',
  dialectOptions: {
    connectTimeout: 5000,
  },
});

class Sport extends Model {}
Sport.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    felhasznalo_id: DataTypes.INTEGER,
    datum: DataTypes.DATEONLY,
    mennyiseg: DataTypes.INTEGER,
  },
  { sequelize, tableName: 'testmozgasok', timestamps: false }
);

module.exports = Sport;
