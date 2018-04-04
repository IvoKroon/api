const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const crateSchema = new Schema({
    title: String,
    temperature: Number,
    humidity: Number,
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }
});

// the schema is useless so far
// we need to create a model using it
const Crate = mongoose.model('Crate', crateSchema);

// make this available to our users in our Node applications
module.exports = Crate;