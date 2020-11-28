import React from 'react';
import './CoursDesActions.css';
import Intitule from './Intitule';
import Moment from 'moment';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Input, InputGroup, Icon} from 'rsuite';

class CoursDesActions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameWidget : "Cours de l'Action",
            recap :"116,03",
            date : Moment().format('LLL')
        };
    }

    render() {
        return (
            <div className = "widget">
                <div className="teo">
                    <Intitule name={this.state.nameWidget}/>
                </div>
                <div>
                    <h1>{this.state.recap}€</h1>
                    <p>{this.state.date}</p>
                </div>
                
            </div>
        )
    }
}
export default CoursDesActions;