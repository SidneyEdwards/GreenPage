const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true, 
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    bookId: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book',
  }
);

module.exports = Book;
