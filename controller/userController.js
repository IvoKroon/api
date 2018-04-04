const User = require('../model/userModel');

module.exports = {
    // Find all recipes
    findAll: async () => {
        let users;
        try {
            return await User.find();
        } catch (err) {
            throw err;
        }
    },

    // Create new recipe
    create: async (firstName, lastName, email) => {
        try {
            const user = new User({ firstName, lastName, email });
            return await user.save();
        } catch (err) {
            throw err;
        }
    },

    remove: async id => {
        try {
            return await User.find({ _id: id }).remove().exec();
        } catch (err) {
            throw err;
        }
    },

    addCrate: async (user, crate) => {
        try {
            user.crates.push(crate);
            return await user.save();
        } catch (err) {
            throw err;
        }
    },

    // checkCrateIsInArray: async crateId => {
    //     try {
    //         // db.survey.find(
    //         //     { results: { $elemMatch: { product: "xyz", score: { $gte: 8 } } } }
    //         //  )
    //         console.log('START');
    //         const result = await User.find(
    //             { crates: { $elemMatch: { _id: crateId } } }
    //         ).exec();
    //         console.log('IN?', result);
    //     } catch (err) {
    //         throw err;
    //     }
    // },

    findOneById: async id => {
        try {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                return await User.findById(id);
            } else {
                return null;
            }

        } catch (err) {
            throw err;
        }
    }
}