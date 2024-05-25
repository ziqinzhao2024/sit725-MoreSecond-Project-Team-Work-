var express = require("express")
const cors=require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
var ejs = require('ejs')
var app = express()

const uri = 'mongodb+srv://s217590332:BZhdv5xBUN1lIP2W@sit725.gjex4b9.mongodb.net/?retryWrites=true&w=majority&appName=sit725';
const dbName = 'MoreSecond';


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: false,
        deprecationErrors: true,
    }
});

client.connect()

const db = client.db(dbName);

app.use(cors())
app.set('views','./public');
app.engine('html',ejs.__express);
app.set('view engine', 'html');

// Middleware
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const itemRoutes = require('./routers/itemRoutes')(db);
app.use('/api/items', itemRoutes);

const userRoutes = require('./routers/userRoutes')(db);
app.use('/api/users', userRoutes);

const orderRoutes = require('./routers/orderRoutes')(db);
app.use('/api/orders', orderRoutes);

const cartRoutes = require('./routers/cartRoutes')(db);
app.use('/api/carts', cartRoutes);

const registryRoutes = require('./routers/registryRoutes')(db);
app.use('/api/registry',registryRoutes)

const loginRoutes = require('./routers/loginRoutes')(db);
app.use('/api/login',loginRoutes)

app.get('/', (req, res) => {
    res.render('index.html');
});
  
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
});
