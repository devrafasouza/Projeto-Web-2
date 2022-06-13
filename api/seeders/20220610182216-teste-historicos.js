'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Historicos',
    [
      {
        nivel: 'facil',
        acertou: true,
        errou: false,
        pergunta: "2 + 2",
        resposta: "4",
        pontuacao: 10,
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        nivel: 'dificil',
        acertou: true,
        errou: false,
        pergunta: "4 * 10",
        resposta: "40",
        pontuacao: 50,
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
         
      },
      {
        nivel: 'facil',
        acertou: true,
        errou: false,
        pergunta: "2 + 2",
        resposta: "4",
        pontuacao: 10,
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        nivel: 'dificil',
        acertou: true,
        errou: false,
        pergunta: "4 * 10",
        resposta: "40",
        pontuacao: 50,
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
         
      },
      {
        nivel: 'facil',
        acertou: true,
        errou: false,
        pergunta: "2 + 2",
        resposta: "4",
        pontuacao: 10,
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        nivel: 'dificil',
        acertou: true,
        errou: false,
        pergunta: "4 * 10",
        resposta: "40",
        pontuacao: 40,
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
         
      },
      {
        nivel: 'facil',
        acertou: true,
        errou: false,
        pergunta: "2 + 2",
        resposta: "4",
        pontuacao: 10,
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        nivel: 'dificil',
        acertou: true,
        errou: false,
        pergunta: "4 * 10",
        resposta: "40",
        pontuacao: 60,
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
         
      },
      {
        nivel: 'facil',
        acertou: true,
        errou: false,
        pergunta: "2 + 2",
        resposta: "4",
        pontuacao: 15,
        usuario_id: 12,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        nivel: 'dificil',
        acertou: true,
        errou: false,
        pergunta: "4 * 10",
        resposta: "40",
        pontuacao: 70,
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
         
      },
      {
        nivel: 'facil',
        acertou: true,
        errou: false,
        pergunta: "2 + 2",
        resposta: "4",
        pontuacao: 10,
        usuario_id: 12,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        nivel: 'dificil',
        acertou: true,
        errou: false,
        pergunta: "4 * 10",
        resposta: "40",
        pontuacao: 50,
        usuario_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
         
      },
      {
        nivel: 'facil',
        acertou: false,
        errou: true,
        pergunta: "2 + 2",
        resposta: "4",
        pontuacao: 15,
        usuario_id: 12,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        nivel: 'dificil',
        acertou: true,
        errou: false,
        pergunta: "4 * 10",
        resposta: "40",
        pontuacao: 70,
        usuario_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
         
      },


    ], {});
   
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('historicos', null, {});
     
  }
};
