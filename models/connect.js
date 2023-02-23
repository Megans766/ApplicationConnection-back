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
      Connect.belongsTo(models.Profile, { foreignKey: 'profileId' })
    }
  }
  Connect.init({
    date: DataTypes.DATE,
    company: DataTypes.STRING,
    position: DataTypes.STRING,
    followUp: DataTypes.BOOLEAN,
    interview: DataTypes.BOOLEAN,
    response: DataTypes.BOOLEAN,
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