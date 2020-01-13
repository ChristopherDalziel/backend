const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cafeSchema = new Schema({
    name: String,
    location: String,
    websiteURL: String,
    reviews: Array    
});

const Cafe = mongoose.model("Cafe", cafeSchema);

module.exports = Cafe;