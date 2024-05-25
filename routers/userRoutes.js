const express = require('express');
const router = express.Router();

module.exports = (db) => {
  const userController = require('../controllers/userController')(db);

  router.get('/', userController.getAllUsers);
  router.post('/', userController.createUser);
  router.get('/:id', userController.getUserById);
  router.put('/:id', userController.updateUser);
  router.delete('/:id', userController.deleteUser);
  router.delete('/test/deleteUser', userController.deleteUserByEmail);

  return router;
};