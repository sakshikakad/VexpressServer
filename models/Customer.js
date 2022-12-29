const mongoose = require("mongoose");

const schema = mongoose.Schema({
  rollNo: String,
  name: String,
  amount: Number,
  date: Date,
});

module.exports = mongoose.model("Customer", schema);
