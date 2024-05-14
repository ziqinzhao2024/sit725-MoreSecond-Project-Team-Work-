let collection = require('../models/item')

const postItem = (req, res) => {
    let item = req.body
    collection.postItem(item, (err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'post item success' });
        }
    });
}

const getAllItems = (req, res) => {
    collection.getAllItems((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'get item success' });
        }
    });
}

const deleteItem = (req, res) => {
    let item = req.body
    collection.deleteItem(item, (err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'delete Item success' });
        }
    });
}

module.exports = {postItem, getAllItems, deleteItem}
