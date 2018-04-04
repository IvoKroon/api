const Recipe = require('../model/recipeModel');

module.exports = {
    // Find all recipes
    findAll: async () => {
        let recipes;
        try {
            return await Recipe.find();;
        } catch (err) {
            throw err;
        }
    },

    // Create new recipe
    create: async (title, description) => {
        try {
            const recipe = new Recipe({ title, description });
            return await recipe.save();

        } catch (err) {
            throw err;
        }
    },

    remove: async id => {
        try {
            return await Recipe.find({ _id: id }).remove().exec();
        } catch (err) {
            throw err;
        }
    },
    findOneById: (id) => {
        try {
            return await Recipe.findOne({ _id: id });
        } catch (err) {
            throw err;
        }
    }
}