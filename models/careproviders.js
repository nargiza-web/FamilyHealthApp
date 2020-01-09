'use strict';
module.exports = (sequelize, DataTypes) => {
  const CareProviders = sequelize.define('CareProviders', {
    doctor_name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    website: DataTypes.STRING,
    specialty: DataTypes.STRING
  }, {});
  CareProviders.associate = function(models) {
    // associations can be defined here
  };
  return CareProviders;
};