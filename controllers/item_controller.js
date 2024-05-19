let collection = require('../models/item')

const postItem = (req, res) => {
    let item = req.body
    collection.postItem(item, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, message: 'post item success' });
        }
    });
}

const putItem = (req, res) => {
    let id = req.params.id;
    let updateRecord = req.body
    collection.putItem(id, updateRecord, (err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'put item success' });
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

const getItemsByCategory = (req, res) => {
    let category = req.params.category;
    collection.getItemsByCategory(category, (err,result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'get item by category success' });
        }
    }
  );
}

const getItemsById = (req, res) => {
    let id = req.params.id;
    collection.getItemsById(id, (err,result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'get item by id success' });
        }
    }
  );
}


const deleteItem = (req, res) => {
    let id = req.params.id;
    collection.deleteItem(id, (err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'delete Item success' });
        }
    });
}

module.exports = {postItem, getAllItems, deleteItem, putItem, getItemsByCategory, getItemsById}
