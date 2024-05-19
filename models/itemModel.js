const { ObjectId } = require('mongodb');

module.exports = {
    getAllItems: async (db) => {
      return await db.collection('Item').find().toArray();
    },
    createItem: async (db, item) => {
      return await db.collection('Item').insertOne(item);
    },
    getItemById: async (db, id) => {
      return await db.collection('Item').findOne({ _id: new ObjectId(id) });
    },
    getItemByCategory: async (db, category) => {
      return await db.collection('Item').find({ category : category }).toArray();
    },
    updateItem: async (db, id, item) => {
      return await db.collection('Item').updateOne({ _id: new ObjectId(id) }, { $set: item });
    },
    deleteItem: async (db, id) => {
      return await db.collection('Item').deleteOne({ _id: new ObjectId(id) });
    }
  };