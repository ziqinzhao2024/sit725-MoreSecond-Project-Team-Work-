const itemModel = require('../models/itemModel');

module.exports = (db) => {
  return {
    getAllItems: async (req, res) => {
      try {
        const items = await itemModel.getAllItems(db);
        res.json(items);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
    createItem: async (req, res) => {
      const item = req.body;
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
          const item = await itemModel.getItemByCategory(db, req.params.id);
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
  };
};
