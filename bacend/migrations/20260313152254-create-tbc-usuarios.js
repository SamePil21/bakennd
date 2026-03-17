'use strict';

const { ForeignKeyConstraintError } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbc_usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      direccion: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      telefono: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(120),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(255), 
        allowNull: false
      },
      rol: {
        type: Sequelize.ENUM("admin", "cliente"),
        allowNull: false,
        defaultValue: 'cliente' 
      },
      fecha_registro: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') 
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') 
      }
    });
    tbc_usuarios.associate = (models) => {
    tbc_usuarios.hasMany(models.tbb_carrito,{
      ForeignKey: 'id_usuario',
      as: 'tbb_carrito'
    });
  };
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbc_usuarios');
   
  }
  
};