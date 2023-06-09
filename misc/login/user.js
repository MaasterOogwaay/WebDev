const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

/**
 * Connect to the database
 */
mongoose.connect(
  "mongodb+srv://MurdocNiccals:MurdocNiccals2912@cluster0.cxblo.mongodb.net/test?authSource=admin&replicaSet=atlas-6hqqb8-shard-0&readPreference=primary&ssl=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

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
