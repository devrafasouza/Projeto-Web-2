const { HistoricoServices } = require('../services');
const historicoServices = new HistoricoServices();

class HistoricoController {

    static async pegaHistorico(req, res) {
        const { id } = req.params;
        try {
            const historicoUsuario = await historicoServices.pegaUmRegistro(Number(id));
            return res.status(200).json(historicoUsuario);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } /* REFATORADO COM SERVICE */
    static async pegaHistoricoResumido(req, res) {
        const { id } = req.params;
        try {
            const historicoResumidoUsuario = await historicoServices.pegaRegistrosResumidos(id); 
            return res.status(200).json(historicoResumidoUsuario);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } /* REFATORADO COM SERVICE */
    static async pegaTodosHistoricos(req, res) {
        try {
            const historicosUsuarios = await historicoServices.pegaTodosOsRegistros(); 
            return res.status(200).json(historicosUsuarios);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } /* REFATORADO COM SERVICE */
    static async restraHistorico(res, req) {
        const novoHistorico = req.body;

        try {
            const novoHistorico = await historicoServices.criaRegistro(novoHistorico); /* cria um novo usuario no banco com o metodo create do sequelize */
            return res.status(200).json(novoHistorico);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } /* REFATORADO COM SERVICE */

}

module.exports = HistoricoController;