import React from 'react';

import {NavLink} from 'react-router-dom';
import './Navigation.css';

import photo from './images/photoPerso.jpg';
import dashboard from './images/iconDashboard.png';
import task from './images/task.png';
import folder from './images/folder.png';
import wallet from './images/wallet.png';
import help from './images/help.png';

class BarreDeNavigation extends React.Component{

    render(){
        return(
        <div className="NavBar">
            <img src={photo} className="App-photo" alt="logo" />
            <NavLink to="/" className="contour"><img src={dashboard} className="App-photo" alt="logo" ></img></NavLink>
            <NavLink to="/Formulaire" className="contour"><img src={help} className="iconMenu2" alt="logo" ></img></NavLink>
            <NavLink to="/" className="contour"><img src={wallet} className="iconMenu2" alt="logo" ></img></NavLink>
            <NavLink to="/" className="contour"><img src={folder} className="iconMenu2" alt="logo" ></img></NavLink>
            <NavLink to="/" className="contour"><img src={task} className="iconMenu2" alt="logo" ></img></NavLink>

        </div>
        );
    }
}export default BarreDeNavigation;