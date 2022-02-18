const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('codey_health', 'root', '', {
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