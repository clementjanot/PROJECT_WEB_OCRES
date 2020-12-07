import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Dashbb from './MonDashboard';
import Formulaire from './components/Formulaire';
import BarreDeNav from './components/Navigation';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function App() {
  return (
     <div className="col-12">
       <BrowserRouter>
        <div className="Placement">
         
          <BarreDeNav />
          
            <Switch>
             <Route path="/" component={Dashbb} exact/>
             <Route path="/formulaire" component={Formulaire}/>
           </Switch>
           
        </div> 
      </BrowserRouter>
     </div>
  )
}

export default App;