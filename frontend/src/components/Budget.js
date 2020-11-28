import React from 'react';
import './Budget.css';
import Intitule from './Intitule';
import Camembert from './camembert';


class Budget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameWidget : "Budget perso",
            nom : "Budget Perso",
            recap :"116,03",
            
        };
    }

    render() {
        return (
            <div className="b">
                
                    <Intitule name={this.state.nameWidget}/>
                
                    <Camembert/>
                
                
            </div>
        )
    }
}
export default Budget;