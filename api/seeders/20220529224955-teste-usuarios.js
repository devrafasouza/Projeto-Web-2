'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Usuarios', [{
                nome: 'Rafael',
                senha: '$12$oEgF25oEAIt.La1XJNdPjOtEtsTNdvY3XDBDAGAsq7rRfvFUHewkW',
                ativo: true,
                role: 'admin',
                email: 'devrafasouza@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Beatriz',
                senha: '$12$oEgF25oEAIt.La1XJNdPjOtEtsTNdvY3XDBDAGAsq7rRfvFUHewkW',
                ativo: true,
                role: 'admin',
                email: 'beatriz@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Breno Neves',
                senha: '$12$oEgF25oEAIt.La1XJNdPjOtEtsTNdvY3XDBDAGAsq7rRfvFUHewkW',
                ativo: true,
                role: 'admin',
                email: 'brenoneves2501@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Pedro',
                senha: '$12$oEgF25oEAIt.La1XJNdPjOtEtsTNdvY3XDBDAGAsq7rRfvFUHewkW',
                ativo: false,
                role: 'usuario',
                email: 'pedro@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Cleber',
                senha: '$12$oEgF25oEAIt.La1XJNdPjOtEtsTNdvY3XDBDAGAsq7rRfvFUHewkW',
                ativo: true,
                role: 'usuario',
                email: 'cleber@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('Usuarios', null, {});

    }
};