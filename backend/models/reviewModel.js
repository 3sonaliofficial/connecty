const mongoose = require("../connection");
const schema = new mongoose.Schema({
  title: String,
  description: String,
  vendor: { type: mongoose, type: Object, ref: "users" },
  location: Object,
  speed: Object,
});

const model = mongoose.model("reviews", schema);

module.exports = model;
