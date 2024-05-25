const {ObjectId} = require('mongodb');

module.exports = {
    createOrder: async (db, order) => {
        return await db.collection('Order').insertOne(order);
    },
    updateOrder: async (db, id, order) => {
        return await db.collection('Order').updateOne({_id: new ObjectId(id)}, {$set: order});
    },
    getAllOrders: async (db, user_id ,page_no, page_size) => {
        return await db.collection('Order').find({user_id: user_id})
            .limit(parseInt(page_size))
            .skip((page_no - 1) * page_size)
            .toArray();
    },
    getOrderById: async (db, id) => {
        return await db.collection('Order').findOne({_id: new ObjectId(id)});
    },
    getOrderByCondition: async (db,user_id, condition) => {
        var reg = new RegExp(".*"+condition+".*$");
        var _filter = {
            $or: [
                {'user_id': user_id},
                {'item_name': {$regex: reg}},
                {'category': {$regex: reg}}
            ]
        }
        return await db.collection('Order')
            .find(_filter)
            .toArray();
    },

    deleteOrder: async (db, id) => {
        return await db.collection('Order').deleteOne({_id: new ObjectId(id)});
    },
    deleteOrderByCategory: async (db, category) => {
        return await db.collection('Order').deleteOne({category: category});
    },
};