const Services = require('./Services.js');
const database = require('../models');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');


class UsuarioServices extends Services {
  constructor(){
    super('Usuarios');
  }

  /* Metodos especificos de UsuarioController */

  async criaRegistro(novoUsuario) {
    return database[this.nomeDoModelo].create(novoUsuario); /* cria um novo usuario no banco com o metodo create do sequelize */
    
  }

  async hashSenha(novoUsuario) {
    return bcrypt.hash(novoUsuario.senha, 12); /* hash na senha com bcrypt */
  }

  async comparaHash(senha, usuarioValidoSenha) {
    return bcrypt.compare(senha, usuarioValidoSenha);

  }

  async criaToken(usuarioValidoId) {
    return jsonwebtoken.sign({}, "5f4dcc3b5aa765d61d8327deb882cf99", {
      subject: String(usuarioValidoId),
      expiresIn: "1d"
  });

  }

  async loginUsuario(email, senha) {
    return database[this.nomeDoModelo].findOne({where: {email: email}})
    
    
  }
  

}

module.exports = UsuarioServices;