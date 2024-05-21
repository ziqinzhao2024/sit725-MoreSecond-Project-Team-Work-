const orderModel = require('../models/orderModel');

module.exports = (db) => {
  return {
    getAllOrders: async (req, res) => {
      try {
        const orders = await orderModel.getAllOrders(db);
        res.json(orders);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
    createOrder: async (req, res) => {
      const order = req.body;
      try {
        const newOrder = await orderModel.createOrder(db, order);
        res.status(201).json(newOrder);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    },
    getOrderById: async (req, res) => {
      try {
        const order = await orderModel.getOrderById(db, req.params.id);
        if (!order) {
          return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
    updateOrder: async (req, res) => {
      const order = req.body;
      try {
        const result = await orderModel.updateOrder(db, req.params.id, order);
        if (result.modifiedCount === 0) {
          return res.status(404).json({ message: 'Order not found' });
        }
        res.json({ message: 'Order updated successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
    deleteOrder: async (req, res) => {
      try {
        const result = await orderModel.deleteOrder(db, req.params.id);
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: 'Order not found' });
        }
        res.json({ message: 'Order deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
  };
};
