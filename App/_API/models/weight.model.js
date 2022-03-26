const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('codey_health', 'root', '', {
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
