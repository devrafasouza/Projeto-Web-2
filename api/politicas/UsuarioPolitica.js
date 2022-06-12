const Usuarios = require('../models/usuarios');


module.exports = {
 
  async isAdmin (req, res, next) {
    if(req.usuario.role === 'admin') {
      next();
    } else {
      return res.status(401).json({mensagem: "Você não tem autorização para essa requisição"});
    }

  },

  async isMyIdOrAdmin (req, res, next) {
    if(req.usuario.id == req.id || req.usuario.role === 'admin') {
      next();
    } else {
      return res.status(401).json({ mensagem: "Você não tem autorização para essa requisição"});
    }
  },

  
}