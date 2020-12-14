import React, {Component}from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Dashbb from './MonDashboard';
import Formulaire from './components/Formulaire';
import Formulaire2 from './components/Formulaire2';
import BarreDeNav from './components/Navigation';



class App extends Component{
  constructor(props){
    super(props);
    this.state={
     
      }
    
  }
  render (){
  return (
     <div className="col-12">
       <BrowserRouter>
        <div className="Placement">
         
          <BarreDeNav />
          
            <Switch>
             <Route exact path="/" component={Dashbb}/>
             <Route path="/Formulaire" component={Formulaire}/>
             <Route path="/Formulaire2" component={Formulaire2}/>
           </Switch>
           
        </div> 
      </BrowserRouter>
     </div>
  )
}
}

export default App;