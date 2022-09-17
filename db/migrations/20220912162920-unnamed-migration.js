"use strict";

const { FRASES_TABLE, FrasesSchema } = require("./../models/frases.model");
const { CODES_TABLE, CodesSchema } = require("./../models/codigo.model");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(FRASES_TABLE, FrasesSchema);
    await queryInterface.createTable(CODES_TABLE, CodesSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(FRASES_TABLE);
    await queryInterface.dropTable(CODES_TABLE);
  },
};
