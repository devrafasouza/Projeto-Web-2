const { Router } = require('express');
const HistoricoController = require('../controllers/HistoricoController');
const auth = require('../middlewares/auth');

const PoliticasUsuario = require('../politicas/UsuarioPolitica');

const router = Router();

router.get('/usuarios/historico/:id', auth, PoliticasUsuario.isMyIdOrAdmin, HistoricoController.pegaHistorico)
router.get('/usuarios/historico/resume/:id', auth, PoliticasUsuario.isMyIdOrAdmin, HistoricoController.pegaHistoricoResumido)
router.get('/usuarios/historicos', auth, PoliticasUsuario.isAdmin, HistoricoController.pegaTodosHistoricos)
router.post('/usuarios/registroHistorico', HistoricoController.restraHistorico)

module.exports = router;