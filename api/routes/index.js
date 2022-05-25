const bodyParser = require('body-parser');
const usuarios = require('./usuariosRoute'); /* rotas de usuarios */

module.exports = app => {
  app.use(bodyParser.json());
  app.use(usuarios);
  
}