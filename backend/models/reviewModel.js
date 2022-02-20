const mongoose = require("../connection");
const schema = new mongoose.Schema({
  title: String,
  text: String,
vendor:{type:mongoose,type:Object,ref:"users"},
  location:Object,
  speed:object,
});

const model = mongoose.model("users", schema);

module.exports = model;