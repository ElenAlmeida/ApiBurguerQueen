'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
   User.hasMany(models.Orders,{foreignKey: 'uid'});
  };

  // User.create({email:"pedro@gmail.com"});
  // User.create({email:"michele@gmail.com"});
  // User.create({email:"fatima@gmail.com"});
  return User;
};