const cartModel = require('../models/cartModel');

module.exports = (db) => {
  return {
    getAllCarts: async (req, res) => {
      try {
        const carts = await cartModel.getAllCarts(db);
        res.json(carts);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
    createCart: async (req, res) => {
      const cart = req.body;
      try {
        const newCart = await cartModel.createCart(db, cart);
        res.status(201).json(newCart);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    },
    getCartById: async (req, res) => {
      try {
        const cart = await cartModel.getCartById(db, req.params.id);
        if (!cart) {
          return res.status(404).json({ message: 'Cart not found' });
        }
        res.json(cart);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
    updateCart: async (req, res) => {
      const cart = req.body;
      try {
        const result = await cartModel.updateCart(db, req.params.id, cart);
        if (result.modifiedCount === 0) {
          return res.status(404).json({ message: 'Cart not found' });
        }
        res.json({ message: 'Cart updated successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
    deleteCart: async (req, res) => {
      try {
        const result = await cartModel.deleteCart(db, req.params.id);
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: 'Cart not found' });
        }
        res.json({ message: 'Cart deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
  };
};
