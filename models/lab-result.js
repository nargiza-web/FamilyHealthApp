'use strict';
module.exports = (sequelize, DataTypes) => {
  const LabResult = sequelize.define('Lab-Result', {
    image: DataTypes.STRING,
    test_day: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  LabResult.associate = function(models) {
    // associations can be defined here
  };
  return LabResult;
};