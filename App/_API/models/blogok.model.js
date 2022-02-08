const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('Codey_health', 'root', '', {
  dialect: 'mysql',
  dialectOptions: {
    connectTimeout: 5000,
  },
});

class Blog extends Model {}
Blog.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    cim: DataTypes.STRING,
    tartalom: DataTypes.STRING,
    felhasznalo_id: DataTypes.INTEGER,
    idopont: DataTypes.DATE,
    status: DataTypes.TINYINT,
  },
  { sequelize, tableName: 'blogok', timestamps: false }
);

module.exports = Blog;
