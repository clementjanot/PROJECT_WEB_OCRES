const mongoose = require('mongoose');

const detailsDepensesSchema = mongoose.Schema({
  sold: { type: String, required: true },
  data : [{
      name : {type: String,required: true},
      euros : {type: Number,required: true},
      pv : {type: String },
      amt : {type: String },
  }],
  userId: { type: String, required: true },
});

module.exports = mongoose.model('DetailsDepenses', detailsDepensesSchema);