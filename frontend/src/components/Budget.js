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
            <div>
                <div>
                    <Intitule name={this.state.nameWidget}/>
                </div>
                <div>
                    <Camembert/>
                </div>
                
            </div>
        )
    }
}
export default Budget;