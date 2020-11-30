import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Dashbb from './MonDashboard';
import Formulaire from './components/Formulaire';
import BarreDeNav from './components/Navigation';


function App() {
  return (
     <div>
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