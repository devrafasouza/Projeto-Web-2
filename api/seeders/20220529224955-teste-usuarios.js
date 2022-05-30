'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Usuarios', 
    [
      {
        nome: 'Rafael',
        senha: '123',
        ativo: true,
        email: 'devrafasouza@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Beatriz',
        ativo: true,
        email: 'beatriz@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'João',
        ativo: true,
        email: 'joao@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Pedro',
        ativo: false,
        email: 'pedro@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Cleber',
        ativo: true,
        email: 'cleber@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Usuarios', null, {});
     
  }
};

