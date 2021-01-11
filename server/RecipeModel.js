const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    userId: {type: String, required: false},
    title: {type: String, required: true},
    imgURL: {type: String, required: true},
    yield: {type: Number, required: true}, 
    insURL: {type: String, required: true}
});

module.exports = mongoose.model("recipes", recipeSchema);