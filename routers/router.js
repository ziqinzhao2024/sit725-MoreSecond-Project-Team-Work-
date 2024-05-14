var exports = require('express');

let router = exports.Router();
let item_controller = require('../controllers/item_controller');
let user_controller = require('../controllers/user_controller');

router.post('/item', (req, res) => {
    item_controller.postItem(req, res);
});

router.get('/item', (req, res) => {
    item_controller.getAllItems(req, res);
});

router.delete('/item', (req, res) => {
    item_controller.deleteItem(req, res);
});

router.post('/user', (req, res) => {
    item_controller.postUser(req, res);
});

router.get('/user', (req, res) => {
    user_controller.getAllUsers(req, res);
});

router.delete('/user', (req, res) => {
    user_controller.deleteUser(req, res);
});


module.exports = router;
