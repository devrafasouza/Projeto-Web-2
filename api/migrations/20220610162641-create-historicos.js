'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Historicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nivel: {
        type: Sequelize.STRING
      },
      acertou: {
        type: Sequelize.BOOLEAN
      },
      errou: {
        type: Sequelize.BOOLEAN
      },
      pergunta: {
        type: Sequelize.STRING
      },
      resposta: {
        type: Sequelize.STRING
      },
      pontuacao: {
        type: Sequelize.INTEGER
      },
      
      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Historicos');
  }
};