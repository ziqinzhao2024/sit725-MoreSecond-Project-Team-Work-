const express = require('express');
const router = express.Router();

module.exports = (db) => {
  const userController = require('../controllers/userController')(db);

  router.post('/', userController.createUser);
  return router;
};