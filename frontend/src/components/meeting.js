import React from 'react';
import './meeting.css';
import Intitule from './Intitule';


import {Input, InputGroup, Icon} from 'rsuite';

export default class meeting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nomWidget:"RDV",
        }
    }

render () {
    if (this.props.RDV == null || this.props.RDV < 2) {
        return (<p>Aucun RDV.</p>);
    }

    return (

        <div className = "meeting-header" ><Intitule name={this.state.nomWidget}/>
            {this.props.RDV.map((rdv,index)=>(
                <p>{rdv.date} : {rdv.nom}</p>
            ))}
        </div>
            
        
    )
}

}