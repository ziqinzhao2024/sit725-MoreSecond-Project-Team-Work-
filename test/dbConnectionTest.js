const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
//引入了MongoDB Node.js驅動程式，以便在Node.js應用程序中使用MongoDB
const uri = "mongodb://localhost:27017/";
//定義了MongoDB數據庫的連接字符串
const client = new MongoClient(uri);
//創建了一個MongoDB客戶端，並使用之前定義的連接字符串初始化它
async function run() {
    //定義了一個名為run的異步函數
    try {
        const database = client.db('MoreSecond');
        console.log(database)
        const User = database.collection('User');
        console.log(User)
        // Query for a movie that has the title 'Back to the Future'
        const query = {};
        const users = await User.findOne(query);
        console.log(users);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
    //run函數中，使用了try...finally塊來確保在完成或出現錯誤時客戶端能夠正確地關閉。無論是否出現異常，client.close()都會被調用
}
run().catch(console.dir);
//執行函數 run
//这段代码的整体流程如下：


//引入 MongoDB Node.js 驱动程序。
//定义 MongoDB 连接字符串并创建客户端。
//定义异步函数 run，在该函数中连接到数据库并查询集合中的文档。
//确保在操作完成后关闭数据库连接。
//执行 run 函数，并处理可能出现的错误。
//通过这段代码，可以看到如何在 Node.js 中使用 MongoDB 驱动程序进行基本的数据库操作，包括连接数据库、查询数据以及关闭连接。
//Import the MongoDB Node.js driver.
//Define the MongoDB connection string and create a client.
//Define an asynchronous function run that connects to the database and queries a collection for documents.
//Ensure the database connection is closed after the operation is completed.
//Execute the run function and handle any potential errors.

