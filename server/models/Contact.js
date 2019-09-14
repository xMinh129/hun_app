const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  status: String,
  address: String,
  occupation: String,
  organisation: String,
  age: Number,
  message: String,
  extendInfo: String
});

module.exports = mongoose.model('Contact', ContactSchema);
