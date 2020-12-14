import React from 'react';
import './Intitule.css';

export default class Intitule extends React.PureComponent {
    constructor (props){
        super(props);
        this.state = {}
    }

    render(){
        return(
        <h3 className="titre">{this.props.name}</h3>
        )
    }
}
