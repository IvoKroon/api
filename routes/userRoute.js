const User = require('../model/userModel');
const Crate = require('../model/crateModel');

module.exports = app => {
    app.get('/user', (req, res) => {
        User.find({}, (err, users) => {
            err ?
                res.json({ 'error': 'An error has occurred' }) :
                res.json(users);
        });
    });

    app.post('/user', (req, res) => {
        // console.log()
        if (req.body.firstName && req.body.lastName && req.body.email) {
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                crates: [],
            });
            user.save(err => {
                if (err) throw err;
                res.json({ user });
            });
        } else {
            res.json({ error: 'User info missing' });
        }
    });

    app.post('/user/crate', (req, res) => {
        if (req.body.userId) {
            if (req.body.title) {
                const id = req.body.userId;
                console.log("ID", id);
                User.findById(id, (err, user) => {
                    console.log(user);
                    if (user) {
                        // Create new crate
                        const crate = new Crate({
                            title: req.body.title,
                            data: {
                                temperature: 20,
                                humidity: 90,
                            }
                        });

                        crate.save(function (err, data) {
                            if (err) throw err;
                            user.crates.push(data);
                            user.save((err, newUser) => {
                                err ?
                                    res.json({ 'error': 'An error has occurred' }) :
                                    res.json({ newUser });
                            });
                            // res.json({ crate });
                        });
                        console.log('There is a user', user);
                    } else {
                        console.log('No user found');
                    }
                })

            } else {
                res.json({ error: 'Error no title found!' });
            }
        } else {
            res.json({ error: "Missing user id" });
        }
    });


    // app.post('/crate', (req, res) => {
    //     if (req.body.title) {
    //         const crate = new Crate({
    //             title: req.body.title,
    //             data: {
    //                 temperature: 20,
    //                 humidity: 90,
    //             }
    //         });

    //         crate.save(function (err) {
    //             if (err) throw err;
    //             res.json({ crate });
    //         });
    //     } else {
    //         res.json({ error: 'Error no title found!' });
    //     }
    // });
}