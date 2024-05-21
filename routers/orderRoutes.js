const express = require('express');
const router = express.Router();

module.exports = (db) => {
  const orderController = require('../controllers/orderController')(db);
  
  router.get('/', orderController.getAllOrders);
  router.post('/', orderController.createOrder);
  router.get('/:id', orderController.getOrderById);
  router.put('/:id', orderController.updateOrder);
  router.delete('/:id', orderController.deleteOrder);

  return router;
};