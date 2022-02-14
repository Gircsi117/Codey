const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('codey_health', 'root', '', {
  dialect: 'mysql',
  dialectOptions: {
    connectTimeout: 5000,
  },
});

class Ingredients extends Model {}
Ingredients.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nev: DataTypes.STRING,
    kcal: DataTypes.INTEGER,
    feherje: DataTypes.DOUBLE,
    szenhidrat: DataTypes.DOUBLE,
    zsir: DataTypes.DOUBLE,
    ehetoe_magaban: DataTypes.TINYINT,
  },
  { sequelize, tableName: 'hozzavalok', timestamps: false }
);

module.exports = Ingredients;
