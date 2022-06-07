'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addColumn(
      'Usuarios',
      'historico',
       {
        type: Sequelize.DataTypes.STRING,
        get: function() {
          return JSON.parse(this.getDataValue('historico'));
        },
        set: function(val) {
          return this.setDataValue('historico', JSON.stringify(val));
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
