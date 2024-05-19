var exports = require('express');

let router = exports.Router();
let item_controller = require('../controllers/item_controller');
let user_controller = require('../controllers/user_controller');

/**
 * Post item to the database.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.post('/items', (req, res) => {
    item_controller.postItem(req, res);
});

/**
 * Get all items from the database.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/items', (req, res) => {
    item_controller.getAllItems(req, res);
});
/**
 * Get one item based on id from the database.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/items/:id', (req, res) => {
    item_controller.getItemsById(req, res);
});

/**
 * Get items based on category from the database.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/items/category/:category', (req, res) => {
    item_controller.getItemsByCategory(req, res);
});
/**
 * Update item to the database.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.put('/items/:id', (req, res) => {
    item_controller.putItem(req, res);
});
/**
 * Delete item from the database.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.delete('/items/:id', (req, res) => {
    item_controller.deleteItem(req, res);
});
/**
 * Post User to the database.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.post('/users', (req, res) => {
    user_controller.postUser(req, res);
});
/**
 * Get all users from the database.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/users', (req, res) => {
   user_controller.getAllUsers(req, res);
});
/**
 * Get user by id from the database.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/users/:id', (req, res) => {
    user_controller.getUsersById(req, res);
});
/**
 * Update user to the database.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.put('/users/:id', (req, res) => {
    user_controller.putUser(req, res);
});
/**
 * Delete user to the database.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.delete('/users/:id', (req, res) => {
    user_controller.deleteUser(req, res);
});


module.exports = router;
