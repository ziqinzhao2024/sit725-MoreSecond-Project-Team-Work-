const itemModel = require('../models/itemModel');

function checkItem(item,res) {
  if (!item.item_name) {
    res.status(400).json({message: 'item name must not be null'})
    return false;
  }
  if (!item.category) {
    res.status(400).json({message: 'category must not be null'})
    return false;
  }
  if (!item.size) {
    res.status(400).json({message: 'size must not be null'})
    return false;
  }
  if (!item.pic) {
    res.status(400).json({message: 'picture must not be null'})
    return false;
  }
  if (!item.original_price) {
    res.status(400).json({message: 'original price must not be null'})
    return false;
  }
  if (!item.price_symbol) {
    res.status(400).json({message: 'price symbol must not be null'})
    return false;
  }
  if (!item.actual_price) {
    res.status(400).json({message: 'actual price must not be null'})
    return false;
  }
  return true;
}

module.exports = (db) => {
  return {
    getAllItems: async (req, res) => {
      let page_no = req.query.page_no;
      let page_size = req.query.page_size;
      if (!page_no || page_no < 1){
        page_no =1;
      }
      if( !page_size || page_size < 0) {
        page_size =10;
      }
      try {
        const items = await itemModel.getAllItems(db,page_no,page_size);
        res.json(items);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
    createItem: async (req, res) => {
      const item = req.body;
      let checkFlag = checkItem(item,res)
      if (!checkFlag){
        return;
      }

      let itemFromDB = await itemModel.existItem(db,item.item_name,item.category,item.size)
      if (itemFromDB){
        return res.status(400).json({ message: 'same item(item_name-category-size) has exist' });
      }

      try {
        const newItem = await itemModel.createItem(db, item);
        res.status(201).json(newItem);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    },
    getItemById: async (req, res) => {
      try {
        const item = await itemModel.getItemById(db, req.params.id);
        if (!item) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
    getItemByCategory: async (req, res) => {
        try {
          const item = await itemModel.getItemByCategory(db, req.params.category);
          if (!item) {
            return res.status(404).json({ message: 'Item not found' });
          }
          res.json(item);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      },
    updateItem: async (req, res) => {
      const item = req.body;

      let itemQueryById = await itemModel.getItemById(db,req.params.id)
      if (!itemQueryById){
        return res.status(400).json({ message: 'item not exist' });
      }

      let itemQueryBySpecific = await itemModel.existItem(db,item.item_name,item.category,item.size)
      if (itemQueryBySpecific){
        return res.status(400).json({ message: 'same item(item_name-category-size) has exist, illegally update' });
      }

      try {
        const result = await itemModel.updateItem(db, req.params.id, item);
        if (result.modifiedCount === 0) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Item updated successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
    deleteItem: async (req, res) => {
      try {
        const result = await itemModel.deleteItem(db, req.params.id);
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Item deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
    deleteItemByCategory: async (req, res) => {
      let category = req.query.category
      try {
        const result = await itemModel.deleteItemByCategory(db, category);
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Item deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
  };
};
