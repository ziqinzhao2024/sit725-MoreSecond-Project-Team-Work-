const userModel = require('../models/userModel');

module.exports = (db) => {
  return {
    getAllUsers: async (req, res) => {
      try {
        const users = await userModel.getAllUsers(db);
        res.json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
    createUser: async (req, res) => {
      const user = req.body;
      try {
        const newUser = await userModel.createUser(db, user);
        res.status(201).json(newUser);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    },
    getUserById: async (req, res) => {
      try {
        const user = await userModel.getUserById(db, req.params.id);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
    getUserByUsername: async (req, res) => {
      try {
        const user = await userModel.getUserByUsername(db, req.params.username);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
    updateUser: async (req, res) => {
      const user = req.body;
      try {
        const result = await userModel.updateUser(db, req.params.id, user);
        if (result.modifiedCount === 0) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User updated successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
    deleteUser: async (req, res) => {
      try {
        const result = await userModel.deleteUser(db, req.params.id);
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
  };
};