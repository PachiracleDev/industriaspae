"use strict";
const { CODES_TABLE } = require("./../models/codigo.model");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn(CODES_TABLE, "category_id");
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
