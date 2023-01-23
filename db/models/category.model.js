const { Sequelize, DataTypes, Model } = require("sequelize");

const CATEGORY_TABLE = "categories";

const CategorySchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  createAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
    field: "created_at",
  },
};

class Category extends Model {
  static associate(models) {
    this.hasMany(models.Frases, {
      as: "frases",
      foreignKey: "categoryId",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      modelName: "Category",
      tableName: CATEGORY_TABLE,
      timestamps: false,
    };
  }
}

module.exports = { CategorySchema, Category, CATEGORY_TABLE };
