const { ObjectId } = require('mongodb');

module.exports = {
    getAllUsers: async (db) => {
      return await db.collection('User').find().toArray();
    },
    createUser: async (db, user) => {
      return await db.collection('User').insertOne(user);
    },
    getUserById: async (db, id) => {
      return await db.collection('User').findOne({ _id: new ObjectId(id) });
    },
    getUserByUsername: async (db, username) => {
      return await db.collection('User').findOne({ username: username });
    },
    updateUser: async (db, id, user) => {
      return await db.collection('User').updateOne({ _id: new ObjectId(id) }, { $set: user });
    },
    deleteUser: async (db, id) => {
      return await db.collection('User').deleteOne({ _id: new ObjectId(id) });
    },
  };