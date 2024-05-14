const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://s217590332:BZhdv5xBUN1lIP2W@sit725.gjex4b9.mongodb.net/?retryWrites=true&w=majority&appName=sit725";
const client = new MongoClient(uri, {
    serverApi: {
    version: ServerApiVersion.v1, strict: true, deprecationErrors: true,
    } 
});

client.connect();

module.exports = client;