const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const auth = require('../middlewares/auth');
const UsuarioValidador = require('../validador/UsuarioValidador')

const PoliticasUsuario = require('../politicas/UsuarioPolitica');

const router = Router();

router.get('/usuarios', auth, PoliticasUsuario.isAdmin, UsuarioController.pegaTodosOsUsuarios) //rota pro adm pegar os dados de todos os usuarios
router.get('/usuarios/:id', auth, PoliticasUsuario.isAdmin, UsuarioController.pegaUmUsuario) // rota pro adm pegar os dados de um usuario pelo id
router.post('/registro', UsuarioController.registraUsuario) // rota pra criar um usuario
router.put('/usuarios/:id', auth, PoliticasUsuario.isMyIdOrAdmin, UsuarioController.atualizaUsuario) // rota para o usuario mudar suas informações, ou um admin
router.delete('/usuarios/:id', auth, PoliticasUsuario.isMyIdOrAdmin, UsuarioController.apagaUsuario); // rota para o usuario deletar sua conta, ou um adm
router.post('/login', UsuarioValidador.validateEmail, UsuarioValidador.validateSenha, UsuarioController.loginUsuario); // rota de login de usuario


module.exports = router;