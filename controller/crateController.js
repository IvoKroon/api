const Crate = require('../model/crateModel');

module.exports = {
    // Find all crates
    findAll: (callback) => {
        Crate.find({}, (err, crate) => {
            if (err) throw err;
            callback(crate);
        })
    },

    // Create new Crate
    create: (title, callback) => {
        const crate = new Crate({
            title, data: { temperature: 20, humidity: 90, }
        });

        crate.save(err => {
            if (err) throw err;
            callback(crate);
        })
    },

    // Find one create by id
    findOneById: (id, callback) => {
        Crate.findOne({ _id: id }, (err, crate) => {
            if (err) throw err;
            callback(crate);
        });
    }
}