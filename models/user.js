let client = require('../dbConnection');

let collection = client.db("MoreSecond").collection('User');

async function postUser(user, callback) {
    await collection.insertOne(user, (err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

async function putUser(id, updateRecord, callback) {
    await collection.updateOne({ _id: id }, { $set: updateRecord }, (err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

async function getAllUsers(callback) {
    await collection.find({}).toArray((err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

async function getUsersById(id, callback) {
    console.log(await collection.findOne({}))
    await collection.findOne({_id: id}, (err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

async function deleteUser(id, callback) {
    await collection.deleteOne({ _id: id }, (err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

module.exports = {postUser, getAllUsers, deleteUser, getUsersById, putUser}