const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

/**
 * Connect to the database
 */
mongoose.connect("mongodb://localhost/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/**
 * Create User model
 */
const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  password: String,
});

/**
 * Export model
 */
User.plugin(passportLocalMongoose);

module.exports = mongoose.model("userData", User, "userData");
