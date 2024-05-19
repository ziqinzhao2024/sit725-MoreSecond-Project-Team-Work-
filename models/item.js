let client = require('../dbConnection');
const { ObjectId } = require('mongodb');
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

function putItem(id, updateRecord, callback) {
    collection.updateOne({ _id: ObjectId(id) }, { $set: updateRecord }, (err, result) => {
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

function getItemsByCategory(category, callback) {
    collection.find({ category: category }).toArray((err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function getItemsById(id, callback) {
    collection.find({ _id: ObjectId(id) }).toArray((err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function deleteItem(id, callback) {
    collection.deleteOne({ _id: new ObjectId(id) }, (err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

module.exports = {postItem, getAllItems, deleteItem, getItemsByCategory, putItem, getItemsById}