const express = require('express');
const router = express.Router();

module.exports = (db) => {
  const OrderController = require('../controllers/orderController')(db);
  
  router.post('/', orderController.createOrder);
  router.put('/:id', orderController.updateOrder);
  router.get('/:id', orderController.getOrderById);
  router.get('/', orderController.getAllOrders);
  router.get('/condition/:user_id', orderController.getOrderByCondition);
  router.delete('/:id', orderController.deleteOrder);

  return router;
};