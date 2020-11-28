import React from 'react';
import './meeting.css';
import Intitule from './Intitule';

import {Input, InputGroup, Icon} from 'rsuite';

export default class todo extends React.Component {
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

            </header>
        </div>
    )
}

}