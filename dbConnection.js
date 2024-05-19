const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://huazhao9824:WRYS0Mu3UrajvKFA@cluster0.tip0dat.mongodb.net/?retryWrites=true&w=majority&appName=cluster0";
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
        client.db("MoreSecond").collection('User');
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