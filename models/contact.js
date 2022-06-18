const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: String,
  number: String,
  email: String,
});

const Contact = mongoose.model("Contact", contactSchema);
const Contactdata = new Contact({
  name: "ebti",
  number: "01096722",
  email: "ebti@gmail.com",
});
Contactdata.save(function (err) {
  console.log(err);
});

module.exports = Contact;
