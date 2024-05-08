const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { isDecimal } = require('validator');


class Product extends Model {}


Product.init(
  {
    id: {
      type: Datatype.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: Datatype.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: Datatype.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
