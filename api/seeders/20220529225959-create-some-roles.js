'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    return Promise.all([
      await queryInterface.bulkInsert('Roles', [
        { role: "admin", createdAt: new Date(), updatedAt: new Date()},
        { role: "usuario", createdAt: new Date(), updatedAt: new Date()}
        
      ], {}),

      await queryInterface.bulkInsert('user_role', [
        { usuario_id: 1, role_id: 1, createdAt: new Date(), updatedAt: new Date() },
        { usuario_id: 2, role_id: 2, createdAt: new Date(), updatedAt: new Date() },
        { usuario_id: 2, role_id: 2, createdAt: new Date(), updatedAt: new Date() }
      ], {})
    ]);
    
     
    
  },

  async down (queryInterface, Sequelize) {
    
    return Promise.all([
      await queryInterface.bulkDelete('Roles', null, {}),
      await queryInterface.bulkDelete('user_role', null, {}),
    ]);
    
  }
};
