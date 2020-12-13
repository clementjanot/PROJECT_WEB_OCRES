import React from 'react';
import './Budget.css';
import Intitule from './Intitule';
import Camembert from './camembert';
import Row from 'react-bootstrap/esm/Row';


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
            
                <div className="budget-header">
                    <Intitule name={this.state.nameWidget}/>
                    <p>Detail des // € de depenses</p>
                        <Camembert budgetDep={this.props.budgetDep}/>
                </div>  
            
        )
    }
}
export default Budget;