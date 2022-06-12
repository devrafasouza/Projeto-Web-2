'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Historicos',
    [
      {
        nivel: 'facil',
        acertos: 10,
        erros: 0,
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        nivel: 'dificil',
        acertos: 8,
        erros: 2,
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
         
      },
      {
        nivel: 'dificil',
        acertos: 5,
        erros: 5,
        usuario_id: 2,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        nivel: 'facil',
        acertos: 9,
        erros: 1,
        usuario_id: 2,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        nivel: 'dificil',
        acertos: 5,
        erros: 5,
        usuario_id: 3,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        nivel: 'facil',
        acertos: 9,
        erros: 1,
        usuario_id: 3,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        nivel: 'dificil',
        acertos: 5,
        erros: 5,
        usuario_id: 4,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        nivel: 'facil',
        acertos: 9,
        erros: 1,
        usuario_id: 4,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        nivel: 'dificil',
        acertos: 5,
        erros: 5,
        usuario_id: 5,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        nivel: 'facil',
        acertos: 9,
        erros: 1,
        usuario_id: 5,
        createdAt: new Date(),
        updatedAt: new Date() 
      },


    ], {});
   
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('historicos', null, {});
     
  }
};
