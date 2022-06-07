const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const auth = require('../middlewares/auth');

const PoliticasUsuario = require('../politicas/UsuarioPolitica');

const router = Router();

router.get('/usuarios', auth, /* PoliticasUsuario.show, */ UsuarioController.pegaTodosOsUsuarios) //rota pro adm pegar os dados de todos os usuarios
router.get('/usuarios/historico/:id', auth, /* PoliticasUsuario.show, */ UsuarioController.pegaUmHistorico) 
router.get('/usuarios/historico', auth, /* PoliticasUsuario.show, */ UsuarioController.pegaTodosHistoricos) 
router.get('/usuarios/:id', auth, UsuarioController.pegaUmUsuario) // rota pro adm pegar os dados de um usuario pelo id
router.post('/registro', UsuarioController.registraUsuario) // rota pra criar um usuario
router.put('/usuarios/:id', auth, UsuarioController.atualizaUsuario) // rota para o usuario mudar suas informações, ou um adm
router.delete('/usuarios/:id', auth, UsuarioController.apagaUsuario); // rota para o usuario deletar sua conta, ou um adm
router.post('/login', UsuarioController.loginUsuario); // rota de login de usuario
router.get('/sobre', )

module.exports = router;