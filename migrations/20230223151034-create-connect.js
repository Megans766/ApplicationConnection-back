'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Connects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      company: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      followUp: {
        type: Sequelize.BOOLEAN
      },
      interview: {
        type: Sequelize.BOOLEAN
      },
      response: {
        type: Sequelize.BOOLEAN
      },
      profileId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Connects');
  }
};