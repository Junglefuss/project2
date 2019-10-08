const mongoose = require('../db/connection');

const WorkerSchema = mongoose.Schema({
  created: { type: Date, required: true, default: Date.now },
  signUpDate: Date,
  firstName: String,
  lastName: String,
  photo: String,
  approvedFor: [],
  skillsReported: [],
  yearsExperienceAsOfSignUp: Number,
  complementarySkills: [],
  connections: {
    referredBy: String,
    recommendedBy: [],
    recommended: [],
    clientsRepresented: [],
    bidsRequested: [],
    projectsBidOn: [],
    projectsWorkedOn: []
  },
  contactInfo: {
    email: [],
    phoneNum: [],
    streetAddress: String,
    city: String,
    state: String,
    zip: Number,
    country: String
  },
  availability: String,
  hourlyRate: Number,
  urls: {
    linkedIn: String,
    portfolio: '',
    other: []
  }
});

module.exports = mongoose.model('Workers', WorkerSchema);
