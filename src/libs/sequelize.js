const { Sequelize } = require("sequelize");
const setUpModels = require("../../db/models/index");

const sequelize = new Sequelize(
  "industriaspae",
  "postgres",
  "Mythelio1234509@",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
setUpModels(sequelize);

module.exports = sequelize;
