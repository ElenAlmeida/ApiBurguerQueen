const router = require('express').Router();
const models = require('../models');
const Order = models.Orders;

router.get('/', (req, resp) => {
	Order.findAll().then(order => {
		const orderList = order.map(orders => orders.dataValues);
		resp.send(orderList);
	});	
});

router.get("/:id" , (req,resp) => {Order.findOne({where: {id:req.params.id}})
	.then(order => {
		resp.send(order)
	});
});

router.post('/' , (req, res) => Order.create(req.body)
  .then(orders =>{
    res.status(201).send(orders);
  })
);

router.put("/:id", (req, res) => {Order.update({...req.body}, {where: { id: req.params.id}})
    .then(() => {
        Order
        .findByPk(req.params.id)
        .then(order => res.send(order))
    });
});

router.delete("/:id", (req, res) => { Order.destroy({where: { id: req.params.id}})
  .then(() => res.sendStatus(200));
});

module.exports = router;
