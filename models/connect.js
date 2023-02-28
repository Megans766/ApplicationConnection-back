'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Connect extends Model {

    static associate(models) {
      Connect.belongsTo(models.Profile, {
        as: 'application',
        foreignKey: 'profileId'
      })
    }
  }
  Connect.init({
    date: DataTypes.STRING,
    company: DataTypes.STRING,
    position: DataTypes.STRING,
    followUp: DataTypes.STRING,
    interview: DataTypes.STRING,
    response: DataTypes.STRING,
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      },
    }
  }, {
    sequelize,
    modelName: 'Connect',
  });
  return Connect;
};