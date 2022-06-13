'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    
    static associate(models) {
      Usuarios.hasMany(models.Historicos), {
        foreignKey: 'usuario_id' 
      };
    }

  }


  Usuarios.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [4, 30],
          msg: "O nome deve conter ao menos 4 caracteres e no maximo 30"
        }
      }
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate: {
        isEmail:{
          args:true,
          msg:'Informe um e-mail valido'
      }
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "usuario"

    }
  },
   {
    sequelize,
    modelName: 'Usuarios',
  });


  return Usuarios;
};

