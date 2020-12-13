const mongoose = require('mongoose');

const beneficiaireSchema = mongoose.Schema({
  nom: { type: String, required: true },
  IBAN: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model('Beneficiaire', beneficiaireSchema);