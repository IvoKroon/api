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

    // Item.find({}).populate({
    //     path: 'tags',
    //     match: { tagName: { $in: ['funny', 'politics'] }}
    // }).exec((err, items) => {
    //   console.log(items.tags) 
    //   // contains only tags where tagName is 'funny' or 'politics'
    // })
    findOneByUserIdAndTitle: async (userId, title) => {
        try {
            return await User
                .findOne({ '_id': userId })
                .populate({
                    path: 'crates',
                    match: { title: { $in: title } }
                }).exec();
            // (err, user) => {

            // console.log('CRATES', user.crates);
            // if (user.crates.length > 0) {
            //     console.log('CRATE', user.crates[0]);
            //     return user.crates[0];
            // } else {
            //     return false
            // }
            // });
        } catch (err) {
            throw err;
        }

    },

    findOneById: async id => {
        try {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                return await User.findById(id).populate('crates').exec();
            } else {
                return null;
            }

        } catch (err) {
            throw err;
        }
    }
}