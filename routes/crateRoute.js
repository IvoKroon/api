const Crate = require('../model/crateModel');

module.exports = app => {
    //create new crate
    app.post('/crate', (req, res) => {
        if (req.body.title) {
            const crate = new Crate({
                title: req.body.title,
                data: {
                    temperature: 20,
                    humidity: 90,
                }
            });

            crate.save(function (err) {
                if (err) throw err;
                res.json({ crate });
            });
        } else {
            res.json({ error: 'Error no title found!' });
        }
    });

    // Get all the crates
    app.get('/crate', (req, res) => {
        Crate.find({}, (err, item) => {
            err ?
                res.json({ 'error': 'An error has occurred' }) :
                res.json(item);
        });
    });

    // Get crate by id
    app.get('/crate/:id', (req, res) => {
        const id = req.params.id;
        Crate.findOne({ _id: id }, (err, crate) => {
            err ?
                res.send({ 'error': 'An error has occurred' }) :
                res.send(crate);
        });
    })
}