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
    acertou: DataTypes.BOOLEAN,
    errou: DataTypes.BOOLEAN,
    pergunta: DataTypes.STRING,
    resposta: DataTypes.STRING,
    pontuacao: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Historicos',
  });
  return Historicos;
};