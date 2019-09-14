const mongoose = require('mongoose');

const VolunteerRegistrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  status: String,
  address: String,
  occupation: String,
  organisation: String,
  age: Number,
  interest: [],
  extendInfo: String
});

module.exports = mongoose.model('VolunteerRegistration', VolunteerRegistrationSchema);
