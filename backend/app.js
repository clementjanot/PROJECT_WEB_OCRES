const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const stuffRoutes =require('./routes/stuff');
const userRoutes = require('./routes/user');
const userTodo = require('./routes/todo');
const userBeneficiaire = require('./routes/beneficiaire');
const meetingRoutes=require('./routes/meeting');
const budgetSemaineRoutes=require('./routes/budgetSemaine');
const detailsDepensesRoutes=require('./routes/detailsDepenses');
const categoriesDepensesRoutes = require('./routes/categoriesDepenses');


mongoose.connect('mongodb+srv://clemjnt:OCRES@cluster0.ag5x2.mongodb.net/DashBoard?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  
  app.use(bodyParser.json());
  
  app.use('/stuff', stuffRoutes);
  app.use('/auth', userRoutes);
  app.use('/todo', userTodo);
  app.use('/beneficiaire', userBeneficiaire);
  app.use('/meeting',meetingRoutes);
  app.use('/bugetSemaine',budgetSemaineRoutes);
  app.use('/detailsDepenses',detailsDepensesRoutes);
  app.use('/categoriesDepenses',categoriesDepensesRoutes);
 
module.exports = app;