import React from 'react';
import './budgetSemaine.css';
import Intitule from './Intitule';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Camembert2 from './camembert2'

import {Input, InputGroup, Icon} from 'rsuite';

class BudgetSemaine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameWidget : "Budget de la semaine",
            montantInit : "100€",
            montantRest : "35,5€",
        };
    }

    render() {
        return (
                <div className = "semaine-header">
                    <Intitule name={this.state.nameWidget}/>
                    <div className="rrrrr">
                            <p>Vous vous étiez fixé un budget de <b>{this.props.depenses.budgetFixe} €</b> pour cette semaine.</p>
                    
                            <p>Il vous reste <b>{this.props.depenses.pasDepense} €</b>.</p>
                            <Camembert2 depenses={this.props.depenses}/>
                            </div>
                    
                </div>
        )
    }
}
export default BudgetSemaine;