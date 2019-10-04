const mongoose = require('../db/connection');

const WorkerSchema = mongoose.Schema({
  signUpDate: Date,
  firstName: String,
  lastName: String,
  photo: String,
  approvedFor: [],
  skillsReported: [],
  yearsExperience: Number,
  complementarySkills: [],
  connections: {
    referredBy: String,
    recommendedBy: [],
    recommended: [],
    bidWith: [],
    companies: []
  },
  contactInfo: {
    email: [],
    phoneNum: [],
    streetAddress: String,
    city: String,
    state: String,
    country: String,
    zip: Number
  },
  availability: String,
  hourlyRate: Number,
  urls: []
});

module.exports = mongoose.model('Workers', WorkerSchema);
