const database = require('../models');

class UsuarioController {
  static async pegaTodosOsUsuarios(req, res) {
    try {
      const todosOsUsuarios = await database.Usuarios.findAll(); /* pega todos os usuarios do banco utilizando o metodo findAll do sequelize */
      return res.status(200).json(todosOsUsuarios);
    } catch (error) {
        return res.status(500).json(error.message);
      
    }
  }
}

modules.exports = UsuarioController;