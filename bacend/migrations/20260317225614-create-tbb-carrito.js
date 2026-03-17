'use strict';

const { ForeignKeyConstraintError } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbb_carritos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbb_usuarios',
          key: 'id'
        }
      },
      total: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fecha_creacion: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
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
    tbb_carrito.associate = (models) => {
      tbb_carrito.belongsTo(models.tbc_usuarios,{
        ForeignKey: 'id_usuari',
        as: 'tbc_usuario'
      });
    }


  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbb_carritos');
  }
};