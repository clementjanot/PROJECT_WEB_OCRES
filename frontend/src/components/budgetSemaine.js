import React from 'react';
import './budgetSemaine.css';
import Intitule from './Intitule';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Input, InputGroup, Icon} from 'rsuite';

class CoursDesActions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameWidget : "Budget de la semaine",
            montantInit : "70€",
            montantRest : "34,45€",
        };
    }

    render() {
        return (
            <div className = "col-md-12">
                <header className = "semaine-header">
                    <Intitule name={this.state.nameWidget}/>
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            Vous vous étiez fixé un budget de <b>{this.state.montantInit}</b> pour cette semaine
                        </Col>

                        <Col lg={6} md={6} sm={6}>
                            Il vous reste <b>{this.state.montantRest}</b>
                        </Col>
                    </Row>
                    
                </header>
            </div>
        )
    }
}
export default CoursDesActions;