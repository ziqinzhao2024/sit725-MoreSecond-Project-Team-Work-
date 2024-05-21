const { ObjectId } = require('mongodb');

module.exports = {
    getAllOrders: async (db) => {
      return await db.collection('Order').find().toArray();
    },
    createOrder: async (db, order) => {
      return await db.collection('Order').insertOne(order);
    },
    getOrderById: async (db, id) => {
      return await db.collection('Order').findOne({ _id: new ObjectId(id) });
    },
    updateOrder: async (db, id, order) => {
      return await db.collection('Order').updateOne({ _id: new ObjectId(id) }, { $set: order });
    },
    deleteOrder: async (db, id) => {
      return await db.collection('Order').deleteOne({ _id: new ObjectId(id) });
    }
  };