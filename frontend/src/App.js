import React, {Component}from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Dashbb from './MonDashboard';
import Formulaire from './components/Formulaire';
import BarreDeNav from './components/Navigation';



class App extends Component{
  constructor(props){
    super(props);
    this.state={
      data : {
        "profil":{
          "nom":"Amandine",
          "Prenom" : "AM",
          "email" : "am.gmail.com",
          "pwd" : "oooo",
        },
        "budgetSemaine" :{
          "budgetFixe":"100",
          "depense": "64.5",
          "pasDepense":"35.5",
          "series":[64.5,100-64.5],
        },
        "meeting":[
          {
            "nom" : "Call avec M.DUPONT",
            "date" : "11.00 am",
          },
          {
            "nom" : "Call avec le Directeur d'agence",
            "date" : "5.00 pm",
          },
          {
            "nom" : "Call avec le Directeur d'agence",
            "date" : "5.00 pm",
          },
        ],
        "beneficiaires":[
          {
            "nom" : "Mme Janot",
            "prenom" : "Agnes",
            "numCompte" : "FR 4500 560 56 6788 89",
            "bic" : "34G56H",
            "banque" : "HSBC Paris",
          },
          {
            "nom" : "Ziegler",
            "prenom" : "Amandine",
            "numCompte" : "FR 4556 67889 678 89897",
            "bic" : "56Z9JY",
            "banque" : "BNP Bank FR",
          },
        ], 
        "todo":[
          {
            "nomTache" : "Loyer",
            "date" : "08/12",
            "prix" : "850",
          },
          {
            "nomTache" : "SFR Mobile",
            "date" : "10/12",
            "prix" : "25",
          },
        ],
      }
    }
  }
  render (){
  return (
     <div className="col-12">
       <BrowserRouter>
        <div className="Placement">
         
          <BarreDeNav />
          
            <Switch>
             <Route path="/" render={(props) => < Dashbb {...props} data={this.state.data} />}/>
             <Route path="/formulaire" component={Formulaire}/>
           </Switch>
           
        </div> 
      </BrowserRouter>
     </div>
  )
}
}

export default App;