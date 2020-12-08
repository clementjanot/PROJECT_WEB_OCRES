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
        ]
        
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