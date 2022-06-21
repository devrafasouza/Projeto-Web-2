const database = require('../models');


class HistoricoController {


    static async pegaHistorico(req, res) {
        const { id } = req.params;
        try {
            const historicoUsuario = await database.Historicos.findAll({
                attributes: ["usuario_id", "nivel", "acertou", "errou", "pergunta", "resposta", "pontuacao"],
                where: {
                    usuario_id: Number(id)
                },

            });
            return res.status(200).json(historicoUsuario);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async pegaHistoricoResumido(req, res) {
        const { id } = req.params;
        try {
            const historicoResumidoUsuario = await database.Historicos.findAll({
                attributes: ["usuario_id", "nivel", "acertou", "errou", "pergunta", "resposta", "pontuacao"],
                where: {
                    usuario_id: Number(id)
                },

            });
            return res.status(200).json(historicoResumidoUsuario);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async pegaTodosHistoricos(req, res) {
        try {
            const historicosUsuarios = await database.Historicos.findAll({
                attributes: ['id', 'Nome', 'historico'],
            });
            return res.status(200).json(historicosUsuarios);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async restraHistorico(res, req) {
        const novoHistorico = req.body;

        try {
            const novoHistorico = await database.Historicos.create(novoHistorico); /* cria um novo usuario no banco com o metodo create do sequelize */
            return res.status(200).json(novoHistorico);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


}

module.exports = HistoricoController;