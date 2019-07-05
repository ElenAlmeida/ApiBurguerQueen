'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define('OrderProduct', {
    idOrder: DataTypes.INTEGER,
    idProducts: DataTypes.INTEGER
  }, {});
  OrderProduct.associate = function(models) {
    OrderProduct.belongsTo(models.Products, {foreignKey: 'idProducts'});
    OrderProduct.belongsTo(models.Orders, {foreignKey: 'idOrder'});
  };

//  OrderProduct.create({idOrder:1, idProducts:14})
  // OrderProduct.create({idOrder:19, idProducts:14})
  return OrderProduct;
};