const database = require('../models');

/* 1- O importante da camada de services é desacoplar responsabilidades, para uma melhor logibilidade e manutenção do codigo */

/* 2- Outra coisa importante de ter uma camada de services é que se uma eventual mudança de banco de dados, o controllador não vai nem se preocupar com isso */

/* Me da uma notinha boa ai professor, empenho não faltou!!! */

class Services{
  constructor(nomeDoModelo){
    this.nomeDoModelo = nomeDoModelo;
  }

  async pegaTodosOsRegistros() {
    return database[this.nomeDoModelo].findAll();
  }

  async pegaUmRegistro(id) {
    return database[this.nomeDoModelo].findOne({where: {id: id}});
  }

  async criaRegistro(dados) {
    return database[this.nomeDoModelo].create(dados); /* cria um novo usuario no banco com o metodo create do sequelize */
    
  }

  async atualizaRegistro(dadosAtualizados, id) {
    return database[this.nomeDoModelo]
      .update(dadosAtualizados, { where: {id: id}}); /* atualiza as informações de um usuario com as novas informações */
  }

  async apagaRegistro(id) {
    return database[this.nomeDoModelo]
      .destroy({where: {id: id}});
  }

}

module.exports = Services;