const { Model, DataTypes, Sequelize } = require("sequelize");

const CODES_TABLE = "codes";

const CodesSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
};

class Codes extends Model {
  static associate(models) {
    // associations can be defined here
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CODES_TABLE,
      modelName: "Codes",
      timestamps: false,
    };
  }
}

module.exports = {
  Codes,
  CodesSchema,
  CODES_TABLE,
};
