// Importing required modules from Sequelize
const { Model, DataTypes } = require('sequelize');

// Imports the configured Sequelize instance
const sequelize = require('../config/connection.js');

// Creates a Tag model extending the Sequelize Model class
class Tag extends Model {}

// Initializes Tag model
Tag.init(
  {
    // Defines model fields
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    // Model options
    sequelize, // Passes the imported Sequelize connection
    timestamps: false, // Disables Sequelize's automatic timestamp
    freezeTableName: true, // Prevents Sequelize from pluralizing the name
    underscored: true, // Enables underscored
    modelName: 'tag', // Sets the model name
  }
);

// Exports the Tag model
module.exports = Tag;
