var exports = require('express');

let router = exports.Router();
let item_controller = require('../controllers/item_controller');
let user_controller = require('../controllers/user_controller');

router.post('/items', (req, res) => {
    item_controller.postItem(req, res);
});

router.get('/items', (req, res) => {
    item_controller.getAllItems(req, res);
});

router.get('/items/:id', (req, res) => {
    item_controller.getAllItems(req, res);
});

router.get('/items/category/:category', (req, res) => {
    item_controller.getItemsByCategory(req, res);
});

router.put('/items/:id', (req, res) => {
    item_controller.putItem(req, res);
});

router.delete('/items/:id', (req, res) => {
    item_controller.deleteItem(req, res);
});

router.post('/users', (req, res) => {
    user_controller.postUser(req, res);
});

router.get('/users', (req, res) => {
   user_controller.getAllUsers(req, res);
});

router.get('/users/:id', (req, res) => {
    user_controller.getUsersById(req, res);
});

router.put('/users/:id', (req, res) => {
    user_controller.putUser(req, res);
});

router.delete('/users/:id', (req, res) => {
    user_controller.deleteUser(req, res);
});


module.exports = router;
