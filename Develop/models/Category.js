// Imports required modules from Sequelize
const { Model, DataTypes } = require('sequelize');

// Imports the configured Sequelize instance
const sequelize = require('../config/connection.js');

// Creates a Category model extending the Sequelize Model class
class Category extends Model {}

// Initializes Category model
Category.init(
  {
    // Defines model fields
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    // Model options
    freezeTableName: true, // Prevents Sequelize from pluralizing the model name
    timestamps: false, // Disables Sequelize's automatic timestamp fields
    underscored: true, // Enables underscored instead of camel-cased column names
    modelName: 'category', // Sets the model name
    sequelize, // Passes the imported Sequelize connection instance
  }
);

// Exports the Category model
module.exports = Category;
