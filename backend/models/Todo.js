const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  tache: { type: String, required: true },
  userId: { type: String },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Todo', todoSchema);