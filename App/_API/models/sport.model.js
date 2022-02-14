const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('codey_health', 'root', '', {
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
    datum: DataTypes.DATE,
    mennyiseg: DataTypes.INTEGER,
  },
  { sequelize, tableName: 'testmozgasok', timestamps: false }
);

module.exports = Sport;
