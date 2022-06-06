const jsonwebtoken = require('jsonwebtoken');
const database = require('../models');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

    if(!authHeader) {
      throw new Error("Falta de Token");
      
    }
    
    const [, token] = authHeader.split(" ")
    

    try {
      const { sub } = jsonwebtoken.verify(token, "5f4dcc3b5aa765d61d8327deb882cf99");

      const usuario = await database.Usuarios.findOne({
        where: { 
          id: Number(sub),
          
        }
        
      })
      req.usuario = usuario;
      console.log('o que tem aqui', req.usuario)
      next();
      if(!usuario) {
        throw new Error("Usuario não existe");
      }
    } catch (error) {
        return res.status(400).json(error.mensagem)
        
      
    }
}