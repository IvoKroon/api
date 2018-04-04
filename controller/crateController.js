const Crate = require('../model/crateModel');

module.exports = {
    // Find all crates
    findAll: async () => {
        let crates;
        try {
            crates = await Crate.find();
            return crates;
        } catch (err) {
            throw err;
        }
    },

    // Create new Crate
    create: async title => {
        try {
            const crate = new Crate({
                title, temperature: 99, humidity: 90
            })
            const data = await crate.save();
            return data;

        } catch (err) {
            throw err;
        }
    },

    // Find one create by id
    findOneById: async id => {
        try {
            const crate = await Crate.findOne({ _id: id });
            return crate;

        } catch (err) {
            throw err;
        }
    },
    remove: async id => {
        try {
            const done = await Crate.find({ _id: id }).remove().exec();
            console.log(done);
        } catch (err) {
            throw err;
        }
    }
}