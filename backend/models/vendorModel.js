const mongoose = require("../connection");
const schema = new mongoose.Schema({
  title: String,
  description: String,
  tag: Array,
  review: Number,
  averageRating: Number,
  topLocation:Array,
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("users", schema);

module.exports = model;
