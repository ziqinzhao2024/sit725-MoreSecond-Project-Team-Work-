const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// 包装连接逻辑
async function connectToMongo() {
    try {
        await client.connect();
        let collection = client.db("MoreSecond").collection('User');
        // console.log(await collection.findOne({}));
        console.log('Connected successfully to MongoDB');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

// 调用连接函数
connectToMongo();


// 导出客户端实例
module.exports = client;