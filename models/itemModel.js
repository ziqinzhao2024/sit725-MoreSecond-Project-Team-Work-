const { ObjectId } = require('mongodb');

module.exports = {
    existItem: async (db,item_name, category, size) => {
        return await db.collection('Item').findOne({item_name:item_name, category:category, size:size});
    },
    getAllItems: async (db,page_no,page_size) => {
      return await db.collection('Item')
          .find()
          .limit(parseInt(page_size))
          .skip((page_no - 1) * page_size)
          .toArray();
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
    },
    deleteItemByCategory: async (db, category) => {
      return await db.collection('Item').deleteOne({ category: category });
    }
  };