const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const dbdata = require('./config').database;
const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(dbdata.url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', err => {
    if (err) throw err

    require('./routes')(app);

    app.listen(port, () => {
        console.log('We are live  ' + port);
    });
});


// mongoose.connect(dbdata.url, (err) => {
//     if (err) throw err

//     require('./routes')(app);

//     app.listen(port, () => {
//         console.log('We are live  ' + port);
//     });
// });

