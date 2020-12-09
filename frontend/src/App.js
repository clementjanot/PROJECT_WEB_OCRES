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
          "nom":"ziegler",
          "prenom" : "Amandine",
          "email" : "am.gmail.com",
          "pwd" : "oooo",
        },
        "depensesParJour" :{
          "sold":"950",
          "data" : [{
            "name": 'Lun',
            "euros": 25,
            "pv": 2400,
            "amt": 2400,
          },
          {
            "name": 'Mar',
            "euros": 13,
            "pv": 2400,
            "amt": 2400,
          },
          {
            "name": 'Mer',
            "euros": 17,
            "pv": 2400,
            "amt": 2400,
          },
          {
            "name": 'jeu',
            "euros": 2.5,
            "pv": 2400,
            "amt": 2400,
          },
          {
            "name": 'Ven',
            "euros": 34,
            "pv": 2400,
            "amt": 2400,
          },
          {
            "name": 'Sam',
            "euros": 2,
            "pv": 2400,
            "amt": 2400,
          },
          {
            "name": 'Dim',
            "euros": 0,
            "pv": 2400,
            "amt": 2400,
          },
          ]
        },
        "budgetSemaine" :{
          "budgetFixe":"100",
          "depense": "64.5",
          "pasDepense":"35.5",
          "series":[64.5,100-64.5],
        },
        "detailsDepenses" :{
          "depenses":"64.5",
          "series": [21, 16, 4, 9, 13,5],
          "options": {
            "chart": {
              "width": 280,
    
              "type": 'pie',
            },
            "labels": ['Logement', 'Alimentation', 'Banque', 'Transports', 'Loisirs'],
            "responsive": [{
              "breakpoint": 480,
              "options": {
                "chart": {
                  "width": 200
                },
                "legend": {
                  "position": 'bottom'
                }
              }
            }]
          },
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
             <Route exact path="/" render={(props) => < Dashbb {...props} data={this.state.data} />}/>
             <Route path="/Formulaire" render={(props) => < Formulaire {...props} data={this.state.data} />}/>
           </Switch>
           
        </div> 
      </BrowserRouter>
     </div>
  )
}
}

export default App;