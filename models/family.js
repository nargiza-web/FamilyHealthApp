'use strict';
module.exports = (sequelize, DataTypes) => {
  const family = sequelize.define('family', {
    family_name: DataTypes.STRING,
    username: DataTypes.STRING,
    address: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  family.associate = function(models) {
    // associations can be defined here
  };
  return family;
};