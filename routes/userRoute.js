// const User = require('../model/userModel');
const CrateController = require('../controller/crateController');
const UserController = require('../controller/userController');

module.exports = app => {
    app.get('/user', async (req, res) => {
        const users = await UserController.findAll();
        res.json(users);
    });

    app.post('/user', async (req, res) => {
        // console.log()
        if (req.body.firstName && req.body.lastName && req.body.email) {
            const { firstName, lastName, email } = req.body;
            const user = await UserController.create(firstName, lastName, email);
            res.json(user);

        } else {
            res.json({ error: 'User info missing' });
        }
    });

    app.post('/user/crate/', async (req, res) => {
        const { userId, crateId } = req.body;
        if (userId && crateId) {
            const crate = await CrateController.findOneById(crateId);
            const user = await UserController.findOneById(userId);

            if (crate !== null && user !== null) {
                // BUG: At the moment you can add multiple the same crates
                const newUser = await UserController.addCrate(user, crate);
                res.json(newUser);
            }
        }
        res.json({ error: 'Something went wrong' });
    });

    // app.post('/user/crate', (req, res) => {
    //     if (req.body.userId) {
    //         if (req.body.title) {
    //             const id = req.body.userId;
    //             console.log("ID", id);
    //             User.findById(id, (err, user) => {
    //                 console.log(user);
    //                 if (user) {
    //                     // Create new crate
    //                     const crate = new Crate({
    //                         title: req.body.title,
    //                         data: {
    //                             temperature: 20,
    //                             humidity: 90,
    //                         }
    //                     });

    //                     crate.save(function (err, data) {
    //                         if (err) throw err;
    //                         user.crates.push(data);
    //                         user.save((err, newUser) => {
    //                             err ?
    //                                 res.json({ 'error': 'An error has occurred' }) :
    //                                 res.json({ newUser });
    //                         });
    //                         // res.json({ crate });
    //                     });
    //                     console.log('There is a user', user);
    //                 } else {
    //                     console.log('No user found');
    //                 }
    //             })

    //         } else {
    //             res.json({ error: 'Error no title found!' });
    //         }
    //     } else {
    //         res.json({ error: "Missing user id" });
    //     }
    // });


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