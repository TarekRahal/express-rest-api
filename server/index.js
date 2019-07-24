require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const setRoutes = require('./modules/user.route');

const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors());
app.set('hostname', process.env.HOSTNAME || "localhost");
app.set('port', process.env.PORT || 4000);
// ObjectId = require('mongodb').ObjectID;

const url = "mongodb://localhost:27017/";

mongoose.set('userCreateIndex', true);
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

mongoose.connection.on('error', function (err) {
    console.log("MONGOOSE ERROR");
    console.log(err);
});

mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB");
    setRoutes(app);
    const server = app.listen(app.get('port'), app.get('hostname'), () => {
        console.log(`app listening on http://${app.get('hostname')}:${app.get('port')}`);
    })
})
