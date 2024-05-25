const userModel = require('../models/userModel');
const {UUID} = require("mongodb");
const jwt =require('jsonwebtoken')
const secretKey = 'it is a boring day';

function checkUserFields(user, res) {
  if (!user.email) {
    res.status(400).json({message: 'email must not be null'})
    return false;
  }
  if (!user.password) {
    res.status(400).json({message: 'password must not be null'})
    return false;
  }
  if (!user.first_name) {
    res.status(400).json({message: 'first name must not be null'})
    return false;
  }
  if (!user.last_name) {
    res.status(400).json({message: 'last name must not be null'})
    return false;
  }
  if (!user.phone_number) {
    res.status(400).json({message: 'phone number must not be null'})
    return false;
  }
  return true;
}

module.exports = (db) => {
  return {
    login: async (req, res) => {
      const loginInfo = req.body

      if (!loginInfo.email){
        res.status(400).json({ message: 'email must not be null' });
        return;
      }else if (!loginInfo.password){
        res.status(400).json({ message: 'password must not be null' });
        return;
      }else {
        console.log("check user exist or not")
      }

      try {
        const users = await userModel.getUserByEmail(db,loginInfo.email);
        if (users.length < 1 ){
          return res.status(400).json({ message: 'user not exist or password incorrect' });
        }

        let user = users[0];
        if (atob(user.password) !== loginInfo.password){
          return res.status(400).json({ message: 'user not exist or password incorrect' });
        }

        user.password  = null;
        user.token = jwt.sign({userId:user._id},secretKey,{expiresIn: '1h'});
        res.json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
    getAllUsers: async (req, res) => {
      let page_no = req.query.page_no;
      let page_size = req.query.page_size;
      if (!page_no || page_no < 1){
        page_no =1;
      }
      if( !page_size || page_size < 0) {
        page_size =10;
      }

      try {
        const users = await userModel.getAllUsers(db,page_no,page_size);
        for (let i = 0; i < users.length; i++) {
          users[i].password=null;
        }
        res.json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
    createUser: async (req, res) => {
      const user = req.body;

      let checkFlag= checkUserFields(user, res);
      if (!checkFlag){
        return;
      }

      try {
        const users = await userModel.getUserByEmail(db,user.email);
        if (users.length >= 1) {
          res.status(400).json({message: 'email has been used'});
          return;
        }

        let originalPassword = user.password;
        user.password = btoa(originalPassword)

        await userModel.createUser(db, user);
        res.status(201).json({message: 'user has been created successfully'});
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

        user.password = null
        res.json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
    updateUser: async (req, res) => {
      const user = req.body;
      const originalUser = await userModel.getUserById(db, req.params.id);
      if (!originalUser){
        return res.status(404).json({ message: 'User not found' });
      }

      if (user.email !== originalUser.email){
        const users = await userModel.getUserByEmail(db,user.email);
        if (users.length > 0){
          return res.status(404).json({ message: 'updated email has been used, illegally update' });
        }
      }

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
    deleteUserByEmail: async (req, res) => {
      let email = req.query.email;
      try {
        const user = await userModel.getUserByEmail(db, email);
        if (user) {
          await userModel.deleteUser(db,user._id)
        }
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
  };
};