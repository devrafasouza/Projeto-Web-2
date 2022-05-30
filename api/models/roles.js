'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    
    static associate(models) {
      Roles.belongsToMany(models.Usuarios, { as: "usuarios",
        through: "user_role", foreignKey: "role_id"
      });
    }
  }
  Roles.init({
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Roles',
  });
  return Roles;
};