// const router = require('express').Router();
const models = require('../models');
const Orders = models.Orders;
const OrderProducts = models.OrderProduct;
const Products = models.Products;
const User = models.User;

const getOrders = (req, resp) => {
	Orders.findAll({include: [{model: OrderProducts, include:[Products]}, User]})
	.then(order => resp.send(order));	
};

const getOrdersById = (req,resp) => { 
	Orders.findByPk(req.params.id,{include: [{model: OrderProducts, include:[Products]}, User]})
	.then(order => order ? resp.send(order) : resp.sendStatus(404)
	);
};

const postOrders = (req, res) => Orders.create(req.body, {include:[OrderProducts]})
  .then(order =>{
    res.status(201).send(order);
  });

const putOrders =(req, res) => {Orders.update({...req.body}, {where: { id: req.params.id}})
    .then(() => {
      Orders
        .findByPk(req.params.id)
        .then(order => res.send(order.dataValues))
    });
};

const deleteOrders = (req, res) => { Orders.destroy({where: { id: req.params.id}})
  .then(() => res.sendStatus(200));
};

module.exports = {
	getOrders,
	getOrdersById,
	postOrders,
	putOrders,
	deleteOrders
}