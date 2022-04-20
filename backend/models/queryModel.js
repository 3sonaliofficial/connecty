const mongoose = require("../connection");
const schema = new mongoose.Schema({
  title: String,
  description: String,
  user: { type: mongoose, type: Object, ref: "users" },
  location: Array,
});

const model = mongoose.model("queries", schema);

module.exports = model;
