const { Sequelize, Model, DataTypes } = require('sequelize');
require('dotenv').config;
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  dialect: 'mysql',
  dialectOptions: {
    connectTimeout: 5000,
  },
});

class FoodXIngredient extends Model {}
FoodXIngredient.init(
  {
    etel_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    hozzavalo_id: DataTypes.INTEGER,
    adag_szorzo: DataTypes.DOUBLE,
  },
  { sequelize, tableName: 'etelek_x_hozzavalok', timestamps: false }
);

module.exports = FoodXIngredient;
