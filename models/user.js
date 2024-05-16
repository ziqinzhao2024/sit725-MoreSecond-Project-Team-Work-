let client = require('../dbConnection');

let collection = client.db("MoreSecond").collection('User');

function postUser(user, callback) {
    collection.insertOne(user, (err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function putUser(id, updateRecord, callback) {
    collection.updateOne({ _id: id }, { $set: updateRecord }, (err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function getAllUsers(callback) {
    collection.find({}).toArray((err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function getUsersById(id, callback) {
    collection.find({ _id: id }).toArray((err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function deleteUser(id, callback) {
    collection.deleteOne({ _id: id }, (err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

module.exports = {postUser, getAllUsers, deleteUser, getUsersById, putUser}