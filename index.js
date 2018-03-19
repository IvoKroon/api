const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const db = require('./config').database;

const app = express();

const port = 3002;

app.use(bodyParser.urlencoded({ extended: true }));



MongoClient.connect(db.url, function (err, db) {
    if (err) throw err

    require('./routes')(app, db);

    app.listen(port, () => {
        console.log('We are live  ' + port);
    });
    // db.collection('mammals').find().toArray(function (err, result) {
    //     if (err) throw err

    //     console.log(result)
    // })
})

