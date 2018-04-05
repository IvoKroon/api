const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const recipeSchema = new Schema({
    title: String,
    desc: String,
    recipeParts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'RecipePart' }],
});

// the schema is useless so far
// we need to create a model using it
const Recipe = mongoose.model('Recipe', recipeSchema);

// make this available to our users in our Node applications
module.exports = Recipe;