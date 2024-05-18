const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);
async function run() {
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
}
run().catch(console.dir);