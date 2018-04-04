const Crate = require('../model/crateModel');

module.exports = {
    // Find all crates
    findAll: async () => {
        let crates;
        try {
            return await Crate.find();
        } catch (err) {
            throw err;
        }
    },

    // Create new Crate
    create: async title => {
        try {
            const crate = new Crate({ title, temperature: 99, humidity: 90 });
            return await crate.save();

        } catch (err) {
            throw err;
        }
    },

    // Find one create by id
    findOneById: async id => {
        try {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                return await Crate.findById(id);
            } else {
                return false;
            }
        } catch (err) {
            throw err;
        }
    },
    remove: async id => {
        try {
            return await Crate.find({ _id: id }).remove().exec();
        } catch (err) {
            throw err;
        }
    }
}