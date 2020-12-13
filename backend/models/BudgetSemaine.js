const mongoose = require('mongoose');

const budgetSemainSchema = mongoose.Schema({
  montantBudget: { type: String, required: true },
  montantDesDepenses: { type: String, required: true },
  montantRestant: { type: String, required: true },
  series:{type: Array, required: true},
  userId: { type: String, required: true },
});

module.exports = mongoose.model('BudgetSemaine', budgetSemainSchema);