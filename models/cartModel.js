const { ObjectId } = require('mongodb');

module.exports = {
    getAllCarts: async (db) => {
      return await db.collection('Cart').find().toArray();
    },
    createCart: async (db, cart) => {
      return await db.collection('Cart').insertOne(cart);
    },
    getCartById: async (db, id) => {
      return await db.collection('Cart').findOne({ _id: new ObjectId(id) });
    },
    updateCart: async (db, id, cart) => {
      return await db.collection('Cart').updateOne({ _id: new ObjectId(id) }, { $set: cart });
    },
    deleteCart: async (db, id) => {
      return await db.collection('Cart').deleteOne({ _id: new ObjectId(id) });
    }
  };