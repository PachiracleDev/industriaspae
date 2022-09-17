const { Model, DataTypes, Sequelize } = require("sequelize");

const FRASES_TABLE = "frases";

const FrasesSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  frase: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "category_id",
    associate: {
      model: "categories",
      key: "id",
    },
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
};

class Frases extends Model {
  static associate(models) {
    this.belongsTo(models.Category, {
      as: "category",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: FRASES_TABLE,
      modelName: "Frases",
      timestamps: false,
    };
  }
}

module.exports = {
  Frases,
  FrasesSchema,
  FRASES_TABLE,
};
