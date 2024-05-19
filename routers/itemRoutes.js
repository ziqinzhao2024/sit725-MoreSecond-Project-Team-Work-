const express = require('express');
const router = express.Router();

module.exports = (db) => {
  const itemController = require('../controllers/itemController')(db);
  
  router.get('/', itemController.getAllItems);
  router.post('/', itemController.createItem);
  router.get('/:id', itemController.getItemById);
  router.get('/category/:category', itemController.getItemByCategory);
  router.put('/:id', itemController.updateItem);
  router.delete('/:id', itemController.deleteItem);

  return router;
};