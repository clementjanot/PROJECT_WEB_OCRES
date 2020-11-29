import React from 'react';
import './meeting.css';
import Intitule from './Intitule';

import {Input, InputGroup, Icon} from 'rsuite';

export default class meeting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nomWidget:"RDV du jour",
        }
    }

render () {
    return (
        <div className = "col-md-12">
            <header className = "meeting-header">
                <Intitule name={this.state.nomWidget}/>
                <p>
                    11.00a.m : Call avec M.DUPONT
                    <br></br>5.00p.m  : Call avec le Directeur d'agence
                </p>
            </header>
        </div>
    )
}

}