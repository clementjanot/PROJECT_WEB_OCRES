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
            <div className="col-md-12">
                <header className="budget-header">
                    <Intitule name={this.state.nameWidget}/>
                    <Row>
                        <Camembert/>
                    </Row>
                </header>  
            </div>
        )
    }
}
export default Budget;