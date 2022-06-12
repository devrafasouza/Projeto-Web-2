const bodyParser = require('body-parser');
const usuarios = require('./usuariosRoute'); /* rotas de usuarios */
const historicos = require('./historicosRoute'); /* rotas de historicos */

module.exports = app => {
  app.use(bodyParser.json());
  app.use(usuarios);
  app.use(historicos);
  
}