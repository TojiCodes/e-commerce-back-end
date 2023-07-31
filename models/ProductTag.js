// Imports required modules from Sequelize
const { Model, DataTypes } = require('sequelize');

// Imports the configured Sequelize instance
const sequelize = require('../config/connection');

// Creates a ProductTag model extending the Sequelize Model class
class ProductTag extends Model { }

// Initializes ProductTag model
ProductTag.init(
  {
    // Defines model fields
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
        unique: false
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
        unique: false
      }
    }
  },
  {
    // Model configuration options
    sequelize, // Passes the imported Sequelize connection
    timestamps: false, // Disables Sequelize's automatic timestamp
    freezeTableName: true, // Prevents Sequelize from pluralizing the name
    underscored: true, // Enables underscored instead of camel-cased column names
    modelName: 'product_tag', // Sets the model name
  }
);

// Exporting the ProductTag model
module.exports = ProductTag;
