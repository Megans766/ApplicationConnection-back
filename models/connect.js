'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Connect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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