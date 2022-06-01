const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/usuarios', UsuarioController.pegaTodosOsUsuarios)
router.get('/usuarios/:id', UsuarioController.pegaUmUsuario)
router.post('/registro', UsuarioController.registraUsuario)
router.put('/usuarios/:id', auth, UsuarioController.atualizaUsuario)
router.delete('/usuarios/:id', UsuarioController.apagaUsuario);
router.post('/login', UsuarioController.loginUsuario);
router.get('/sobre', )

module.exports = router;