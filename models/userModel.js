const { ObjectId } = require('mongodb');

module.exports = {
    getUserByEmail: async (db,email) => {
        return await db.collection('User').find({email:email}).toArray();
    },
    getAllUsers: async (db,page_no,page_size) => {
      return await db.collection('User')
          .find()
          .limit(parseInt(page_size))
          .skip((page_no - 1) * page_size)
          .toArray();
    },
    createUser: async (db, user) => {
      return await db.collection('User').insertOne(user);
    },
    getUserById: async (db, id) => {
      return await db.collection('User').findOne({ _id: new ObjectId(id) });
    },
    updateUser: async (db, id, user) => {
      return await db.collection('User').updateOne({ _id: new ObjectId(id) }, { $set: user });
    },
    deleteUser: async (db, id) => {
      return await db.collection('User').deleteOne({ _id: new ObjectId(id) });
    },
  };