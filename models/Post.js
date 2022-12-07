const mongoose = require("mongoose");

const schema = mongoose.Schema({
    rollNo: String,
    name: String,
    amount: Number,
    date: String,
});

module.exports = mongoose.model("Post", schema);