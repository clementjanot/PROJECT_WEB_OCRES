const mongoose = require('mongoose');

const categoriesDepensesSchema = mongoose.Schema({
    depenses: { type: Number, required: true },
    series:{type: Array, required: true},
    option : 
        {
            chart :{
                    width : { type: Number, required: true },
                    type : { type: String, required: true },

                },
            labels:{type: Array, required: true}, 
            responsive :{
                breakpoint : { type: Number, required: true },
                option : {
                    chart :{
                        width : { type: Number, required: true },
                    },
                    legend :{
                        position : { type: String, required: true },
                    },

                }

            },
        },
  userId: { type: String, required: true },
});

module.exports = mongoose.model('CategoriesDepenses', categoriesDepensesSchema);