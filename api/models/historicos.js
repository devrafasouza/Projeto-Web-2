'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historicos extends Model {
   
    static associate(models) {
      Historicos.belongsTo(models.Usuarios, {
        foreignKey: 'usuario_id' 
      });
    }
  }
  Historicos.init({
    nivel: DataTypes.STRING,
    acertos: DataTypes.INTEGER,
    erros: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Historicos',
  });
  return Historicos;
};