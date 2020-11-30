import React from 'react';

import {NavLink} from 'react-router-dom';

class BarreDeNavigation extends React.Component{

    render(){
        return(
        <div className="NavBar">
            <NavLink to="/" className="contour">test</NavLink>
            <NavLink to="/Formulaire" className="contour">ahaha</NavLink>

        </div>
        );
    }
}export default BarreDeNavigation;