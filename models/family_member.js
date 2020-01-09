'use strict';
module.exports = (sequelize, DataTypes) => {
  const Family_member = sequelize.define('Family_member', {
    image_url: DataTypes.STRING,
    family_member: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthday: DataTypes.STRING
  }, {});
  Family_member.associate = function(models) {
    // associations can be defined here
  };
  return Family_member;
};