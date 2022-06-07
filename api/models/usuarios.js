'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    
    static associate(models) {
      Usuarios.belongsToMany(models.Roles, { as: "roles",
        through: "user_role", foreignKey: "usuario_id"
      });
    }
/* 
    static isAdmin = function(roles) {
      let tmpArray = [];
      roles.forEach(role => tmpArray.push(role.role));

      return tmpArray.includes('admin');
    } */


  }
  /* Usuarios.isAdmin = function(roles) {
    var tmpArray = [];
    roles.forEach(role => tmpArray.push(role.Roles));

    return tmpArray.includes('admin');
  } */


  Usuarios.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [4, 20],
          msg: "O nome deve conter ao menos 4 caracteres e no maximo 20"
        }
      }
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      /* validate: {
        len: {
          args: [6, 40],
          msg: "A senha deve conter ao menos 6 caracteres e no maximo 40"
        }
      } */
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
    historico: {
      type: DataTypes.STRING,
      get: function() {
        return JSON.parse(this.getDataValue('historico'));
      },
      set: function(val) {
        return this.setDataValue('historico', JSON.stringify(val));
      }
    }
  },
   {
    sequelize,
    modelName: 'Usuarios',
  });

  /* Usuarios.isAdmin(); */

  return Usuarios;
};

