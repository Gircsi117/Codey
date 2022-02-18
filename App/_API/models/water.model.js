const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('codey_health', 'root', '', {
  dialect: 'mysql',
  dialectOptions: {
    connectTimeout: 5000,
  },
});

class Water extends Model {}
Water.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    mennyiseg: DataTypes.DOUBLE,
    datum: DataTypes.DATEONLY,
    felhasznalo_id: DataTypes.INTEGER,
  },
  { sequelize, tableName: 'folyadek_bevitel', timestamps: false }
);

module.exports = Water;
