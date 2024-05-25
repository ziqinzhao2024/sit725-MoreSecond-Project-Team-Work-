const express = require('express');
const router = express.Router();

module.exports = (db) => {
  const cartController = require('../controllers/cartController')(db);
  
  router.get('/', cartController.getAllCarts);
  router.post('/', cartController.createCart);
  router.get('/:id', cartController.getCartById);
  router.put('/:id', cartController.updateCart);
  router.delete('/:id', cartController.deleteCart);

  return router;
};