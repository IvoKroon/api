const Recipe = require('../model/recipeModel');

async function findOneById(id) {
    try {
        const recipe = await Recipe.findOne({ _id: id });
        return recipe;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    // Find all recipes
    findAll: async () => {
        let recipes;
        try {
            recipes = await Recipe.find();
            return recipes;
        } catch (err) {
            throw err;
        }
    },

    // Create new recipe
    create: (title, description) => {
        try {
            return new Recipe({ title, description }).save();

        } catch (err) {
            throw err;
        }
    },

    remove: async id => {
        try {
            const done = await Recipe.find({ _id: id }).remove().exec();
            console.log(done);
        } catch (err) {
            throw err;
        }
    },
    findOneById = findOneById(id)
}