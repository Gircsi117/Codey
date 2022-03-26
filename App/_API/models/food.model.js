const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('codey_health', 'root', '', {
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
