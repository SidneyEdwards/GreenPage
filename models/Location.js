const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {
}

Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    hooks: {
      beforeCreate: async (newLocationData) => {
        // newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newLocationData;
      },
      beforeUpdate: async (updatedLocationData) => {
        // updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedLocationData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'location',
  }
);

module.exports = Location;
