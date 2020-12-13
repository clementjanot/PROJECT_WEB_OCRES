const mongoose = require('mongoose');

const meetingSchema = mongoose.Schema({
  tache: { type: String, required: true },
  heure: { type: Date, required: true },
  userId: { type: String },
});

module.exports = mongoose.model('Meeting', meetingSchema);