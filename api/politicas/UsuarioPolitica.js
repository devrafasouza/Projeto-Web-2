const Usuarios = require('../models/usuarios');


module.exports = {
 
  async show (req, res, next) {
    if(Usuarios.isAdmin(req.usuario.roles)) {
      next();
    } else {
      return res.status(401).json({mensagem: "Você não tem autorização para essa requisição"});
    }

  },

  async update (req, res, next) {
    if(usuario.id === Usuarios.id) {
      next();
    } else {
      return res.status(404).json({ mensagem: "Você não tem autorização para essa requisição"});
    }
  },

  async delete (req, res, next) {
    if(req.usuario.id === Usuarios.id || Usuarios.isAdmin(req.usuarios.roles)) {
      next();
    } else {
      return res.status(404).json({ mensagem: "Você não tem autorização para essa requisição"});
    }
  }
}