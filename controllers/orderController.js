const orderModel = require('../models/orderModel');
const userModel = require('../models/userModel');
const itemModel = require('../models/itemModel');

module.exports = (db) => {
    return {
        createOrder: async (req, res) => {
            const orderArr = req.body;

            for (let i = 0; i < orderArr; i++) {
                let order = orderArr[i];
                if (order.num < 1) {
                    return res.status(400).json({message: order.item_name + 'does not have valid num'})
                }

                let userId = order.user_id;
                let itemId = order.item_id;
                try {
                    let user = userModel.getUserById(db, userId);
                    if (!user) {
                        return res.status(400).json({message: 'user info not exist'});
                    }

                    let item = itemModel.getItemById(db, itemId);
                    if (!item) {
                        return res.status(400).json({message: 'item info not exist'});
                    }
                } catch (error) {
                    res.status(400).json({message: error.message});
                }
            }
            let date = new Date();
            let order_id = date.getFullYear() + '' + (date.getMonth() + 1) + '' + date.getDate() + '' + Date.now();
            try {
                for (let i = 0; i < orderArr.length; i++) {
                    let order = orderArr[i];
                    order.order_id = order_id;
                    await orderModel.createOrder(db, order);
                }

                return res.status(200).json({message: 'order has been created successfully'});
            } catch (error) {
                res.status(400).json({message: error.message});
            }
        },
        getAllOrders: async (req, res) => {
            let page_no = req.query.page_no;
            let page_size = req.query.page_size;
            let user_id = req.query.user_id;
            if (!page_no || page_no < 1){
                page_no =1;
            }
            if( !page_size || page_size < 0) {
                page_size =10;
            }
            try {
                const orders = await orderModel.getAllOrders(db, user_id, page_no, page_size);
                res.status(200).json(orders);
            } catch (error) {
                res.status(500).json({message: error.message});
            }
        },
        getOrderByCondition: async (req, res) => {
            let user_id = req.params.user_id;
            let condition = req.query.condition;

            try {
                const orders = await orderModel.getOrderByCondition(db, user_id, condition);
                res.status(200).json(orders);
            } catch (error) {
                res.status(500).json({message: error.message});
            }
        },

        getOrderById: async (req, res) => {
            try {
                const order = await orderModel.getOrderById(db, req.params.id);
                if (!order) {
                    return res.status(404).json({message: 'order not found'});
                }

                res.status(200).json(order);
            } catch (error) {
                res.status(500).json({message: error.message});
            }
        },
        updateOrder: async (req, res) => {
            const order = req.body;
            if (order.length > 1) {
                return res.status(400).json({message: 'not support to update arr'});
            }

            try {
                const result = await orderModel.updateOrder(db, req.params.id, order);
                if (result.modifiedCount === 0) {
                    return res.status(404).json({message: 'order not found'});
                }
                res.json({message: 'order updated successfully'});
            } catch (error) {
                res.status(500).json({message: error.message});
            }
        },
        deleteOrder: async (req, res) => {
            try {
                const result = await orderModel.deleteOrder(db, req.params.id);
                if (result.deletedCount === 0) {
                    return res.status(404).json({message: 'order not found'});
                }
                res.json({message: 'order deleted successfully'});
            } catch (error) {
                res.status(500).json({message: error.message});
            }
        },
        deleteOrderByCategory: async (req, res) => {
            let category = req.query.category
            try {
                const result = await orderModel.deleteOrderByCategory(db, category);
                if (result.deletedCount === 0) {
                    return res.status(404).json({message: 'order not found'});
                }
                res.json({message: 'order deleted successfully'});
            } catch (error) {
                res.status(500).json({message: error.message});
            }
        },
    };
};