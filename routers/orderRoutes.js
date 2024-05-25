const express = require('express');
const router = express.Router();

module.exports = (db) => {
  const OrderController = require('../controllers/OrderController')(db);
  
  router.post('/', OrderController.createOrder);
  router.put('/:id', OrderController.updateOrder);
  router.get('/:id', OrderController.getOrderById);
  router.get('/', OrderController.getAllOrders);
  router.get('/condition/:user_id', OrderController.getOrderByCondition);
  router.delete('/:id', OrderController.deleteOrder);

  return router;
};