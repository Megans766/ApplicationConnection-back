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
    date: DataTypes.DATE,
    company: DataTypes.STRING,
    position: DataTypes.STRING,
    followUp: DataTypes.BOOLEAN,
    interview: DataTypes.BOOLEAN,
    response: DataTypes.BOOLEAN,
    profileId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Connect',
  });
  return Connect;
};