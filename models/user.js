const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

const Users = new User({
  username: "ebti",
  password: "$2b$10$EoQRog657CSGcsWVhE69p.BcgLrWoLml/dpZyObcRtJ5RUBdiTwT6",
  email: "ebti@gmail.com",
});
Users.save(function (err) {
  console.log(err);
});

module.exports = User;
