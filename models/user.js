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

function getAllUsers(callback) {
    collection.find({}).toArray((err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function deleteUser(user, callback) {
    collection.deleteOne(user, (err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

module.exports = {postUser, getAllUsers, deleteUser}