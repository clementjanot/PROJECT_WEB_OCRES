import React from 'react';


export default class Intitule extends React.PureComponent {
    constructor (props){
        super(props);
    }

    render(){
        return(
        <h3 className="titre">{this.props.name}</h3>
        )
    }
}