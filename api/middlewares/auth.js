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

      const user = await database.Usuarios.findOne({
        where: { 
          id: sub
        }
      }); 
      if(!user) {
        throw new Error("Usuario não existe");
      }
      next();
    } catch (error) {
        throw new Error("Token invalido");
      
    }
}