import React from 'react';
import './meeting.css';
import Intitule from './Intitule';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {Input, InputGroup, Icon} from 'rsuite';

export default class meeting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nomWidget:"Meeting du jour",
        }
    }

render () {
    return (
        <div className = "col-md-12">

            <header className = "meeting-header">
                <Intitule name={this.state.nomWidget}/>
                <p>
                    10:00a.m - meeting RH
                    <br></br>1:00p.m  - call avec Adrien
                </p>
            </header>
        </div>
    )
}

}