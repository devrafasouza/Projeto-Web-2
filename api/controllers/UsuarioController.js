const database = require('../models');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');


class UsuarioController {
  static async pegaTodosOsUsuarios(req, res) {
    try {
      const todosOsUsuarios = await database.Usuarios.findAll(); /* pega todos os usuarios do banco utilizando o metodo findAll do sequelize */
      return res.status(200).json(todosOsUsuarios);
    } catch (error) {
        return res.status(500).json(error.message);
      
    }
  }

  static async pegaUmUsuario(req, res) {
    const { id } = req.params;
    try {
      const umUsuario = await database.Usuarios.findOne({
        where: { 
          id: Number(id) 
        }
      }); /* pega um usuario atraves do seu id, pelo banco utilizando o metodo findOne do sequelize */
      return res.status(200).json(umUsuario);
    } catch (error) {
        return res.status(500).json(error.message);
    }
  }

  static async registraUsuario(req, res) {
    const novoUsuario = req.body;
    novoUsuario.senha = await bcrypt.hash(novoUsuario.senha, 12);
    try {
      const novoUsuarioCriado = await database.Usuarios.create(novoUsuario); /* cria um novo usuario no banco com o metodo create do sequelize */
      return res.status(200).json(novoUsuarioCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaUsuario(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Usuarios.update(novasInfos,{
        where: { 
          id: Number(id) 
        }
      }); /* atualiza as informações de um usuario com as novas informações */
      const usuarioAtualizado = await database.Usuarios.findOne({
        where: { 
          id: Number(id) 
        }
      });
      return res.status(200).json(usuarioAtualizado);
    } catch (error) {
        return res.status(500).json(error.message);
    }
  }

  static async apagaUsuario(req, res) {
    const { id } = req.params;
    try {
      await database.Usuarios.destroy({
        where: { 
          id: Number(id) 
        }
      });
      return res.status(200).json({ mensagem: `Usuario com o id: ${id} foi deletado` });
    } catch (error) {
        return res.status(500).json(error.message);
    }
  }

  static async loginUsuario(req, res) {
    const { email, senha } = req.body;
    const { id } = req.params

    try {
      const usuarioValido = await database.Usuarios.findOne({
        where: { 
          email: email
        }
      });
      if(!usuarioValido) {
        throw new Error("Email ou senha invalida!");
      }
      const senhaValida = await bcrypt.compare(senha, usuarioValido.senha);
      if(!senhaValida) {
        throw new Error("Email ou senha invalida!");
      }
      const token = jsonwebtoken.sign({}, "5f4dcc3b5aa765d61d8327deb882cf99", {
        subject: String(usuarioValido.id),
        expiresIn: "1d"
      });

      return res.status(200).json(token);


    } catch (error) {
      return res.status(500).json(error.message);
    }

  }

}

module.exports = UsuarioController;