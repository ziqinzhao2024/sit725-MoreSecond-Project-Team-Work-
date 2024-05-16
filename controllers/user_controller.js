let collection = require('../models/user')

const postUser = (req, res) => {
    let user = req.body
    collection.postUser(user, (err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'post user success' });
        }
    });
}

const putUser = (req, res) => {
    let id = req.params.id;
    let updateRecord = req.body
    collection.putUser(id, updateRecord, (err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'put user success' });
        }
    });
}

const getAllUsers = (req, res) => {
    collection.getAllUsers((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'get all users success' });
        }
    });
}

const getUsersById = (req, res) => {
    let id = req.params.id;
    collection.getUsersById(id, (err,result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'get user by id success' });
        }
    }
  );
}

const deleteUser = (req, res) => {
    let id = req.params.id;
    collection.deleteUser(id, (err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'delete user success' });
        }
    });
}

module.exports = {postUser, putUser, getAllUsers, getUsersById, deleteUser}
