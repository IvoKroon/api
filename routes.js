const ObjectID = require('mongodb').ObjectID;
const database = 'crates';

module.exports = function (app, db) {
    app.post('/crate', (req, res) => {
        console.log(req.body.title);
        if (req.body.title) {

            const crate = {
                title: req.body.title,
                data: {
                    temperature: 0,
                    humidity: 0
                }
            };

            db.collection(database).insert(crate, (err, result) => {
                if (err) {
                    res.json({ 'error': 'An error has occurred' });
                } else {
                    res.json(result.ops[0]);
                }
            })
        } else {
            res.json({ error: 'Error no title found!' });
        }

    });

    app.get('/crate', (req, res) => {
        // find()
        db.collection(database).find({}).toArray((err, item) => {
            if (err) {
                res.json({ 'error': 'An error has occurred' });
            } else {
                console.log(item);
                res.json(item);
            }
        });
    });

    app.get('/crate/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection(database).findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    })
}