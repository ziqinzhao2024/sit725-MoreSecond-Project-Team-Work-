const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.

const uri = "mongodb://localhost:27017/";
// Defines the connection string for the MongoDB database.

const client = new MongoClient(uri);
//Creates a MongoDB client and initialises it with the connection string defined earlier.
async function run() {
        // Defines an asynchronous function called run.
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





//Import the MongoDB Node.js driver.
//Define the MongoDB connection string and create a client.
//Define an asynchronous function run that connects to the database and queries a collection for documents.
//Ensure the database connection is closed after the operation is completed.
//Execute the run function and handle any potential errors.

