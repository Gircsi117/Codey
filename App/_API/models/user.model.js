const { Sequelize, Model, DataTypes } = require('sequelize');
require('dotenv').config;
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  dialect: 'mysql',
  dialectOptions: {
    connectTimeout: 5000,
  },
});

class User extends Model {}
User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nev: DataTypes.STRING,
    email: DataTypes.STRING,
    nem: DataTypes.TINYINT,
    password: DataTypes.STRING,
    jogosultsag: DataTypes.TINYINT,
    reg_token: DataTypes.STRING,
    magassag: DataTypes.INTEGER,
    cel_suly: DataTypes.DOUBLE,
  },
  { sequelize, tableName: 'felhasznalok', timestamps: false }
);

module.exports = User;
