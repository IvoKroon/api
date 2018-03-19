const Crate = require('../controller/crateController');

module.exports = app => {
    //create new crate
    app.post('/crate', (req, res) => {
        if (req.body.title) {
            Crate.create(req.body.title, crate => {
                console.log(crate);
                res.json({ crate });
            });
        } else {
            res.json({ error: 'Error no title found!' });
        }
    });

    // Get all the crates
    app.get('/crate', (req, res) => {
        Crate.findAll(crates => {
            res.json(crates);
        });
    });

    // Get crate by id
    app.get('/crate/:id', (req, res) => {
        const id = req.params.id;
        Crate.findOneById(id, crate => {
            res.send(crate);
        })
    })
}