const router = require('express').Router();
const Order = require('../controllers/orders');

router.get("/", Order.getOrders);
router.get("/:id", Order.getOrdersById);
router.post("/", Order.postOrders);
router.put("/:id", Order.putOrders);
router.delete("/:id", Order.deleteOrders);




// router.get('/', (req, resp) => {
// 	Orders.findAll({include: [{model: OrderProducts, include:[Products]}, User]})
// 	.then(order => resp.send(order));	
// });

// router.get("/:id" , (req,resp) => { 
// 	Orders.findByPk(req.params.id,{include: [{model: OrderProducts, include:[Products]}, User]})
// 	.then(order => order ? resp.send(order) : resp.sendStatus(400)
// 	);
// });

// router.post('/' , (req, res) => Orders.create(req.body, {include:[OrderProducts]})
//   .then(order =>{
//     res.status(201).send(product);
//   })
// );

// router.put("/:id", (req, res) => {Orders.update({...req.body}, {where: { id: req.params.id}}
//     .then(() => {
//       Orders
//         .findByPk(req.params.id)
//         .then(order => res.send(order.dataValues))
//     }));
// });

// router.delete("/:id", (req, res) => { Orders.destroy({where: { id: req.params.id}})
//   .then(() => res.sendStatus(200));
// });

module.exports = router;