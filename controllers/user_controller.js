let collection = require('../models/user')

const postUser = (req, res) => {
    let user = req.body
    collection.postUser(user, (err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'post user success' });
        }
    });
}

const getAllUsers = (req, res) => {
    collection.getAllUsers((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'get user success' });
        }
    });
}

const deleteUser = (req, res) => {
    let item = req.body
    collection.deleteUser(user, (err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'delete user success' });
        }
    });
}

module.exports = {postUser, getAllUsers, deleteUser}
