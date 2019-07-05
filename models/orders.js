'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    status: DataTypes.STRING,
    uid: DataTypes.INTEGER
  }, {});
  Orders.associate = function(models) {
    Orders.hasMany(models.OrderProduct, {foreignKey: 'idOrder'});
    Orders.belongsTo(models.User, {foreignKey: 'uid'});
  };

  // Orders.create({status:"andamento", uid: "3"});
  //Orders.create({})
  return Orders;
};