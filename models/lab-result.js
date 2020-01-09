'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lab - Result = sequelize.define('Lab-Result', {
    image: DataTypes.STRING,
    test_day: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  Lab - Result.associate = function(models) {
    // associations can be defined here
  };
  return Lab - Result;
};