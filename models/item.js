let client = require('../dbConnection');

let collection = client.db("MoreSecond").collection('Item');

function postItem(item, callback) {
    collection.insertOne(item, (err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function getAllItems(callback) {
    collection.find({}).toArray((err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function deleteItem(item, callback) {
    collection.deleteOne(item, (err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

module.exports = {postItem, getAllItems, deleteItem}