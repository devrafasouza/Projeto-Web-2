const Services = require('./Services.js');
const database = require('../models');

class HistoricoServices extends Services {
  constructor(){
    super('Historicos');
  }

  /* Metodos especificos de HistoricoController */
  async pegaTodosOsRegistros() {
    return database[this.nomeDoModelo].findAll({attributes: ['id', 'Nome', 'historico']});
  }

  async pegaRegistrosResumidos(id) {
    return database[this.nomeDoModelo].findAll( {
      attributes: ["usuario_id", "nivel", "acertou", "errou", "pergunta", "resposta", "pontuacao"],
      where: {
          usuario_id: Number(id)
      },
  });
  }

  async pegaUmRegistro(id) {
    return database[this.nomeDoModelo].findAll({
      attributes: ["usuario_id", "nivel", "acertou", "errou", "pergunta", "resposta", "pontuacao"],
      where: {
          usuario_id: id
      },

  });

  }
  
}

module.exports = HistoricoServices;