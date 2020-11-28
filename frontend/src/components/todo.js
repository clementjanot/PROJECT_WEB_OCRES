import React from 'react';
import './todo.css';
import Intitule from './Intitule';

import {Input, InputGroup, Icon} from 'rsuite';

export default class todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nomWidget:"To do",
        }
    }

    render() {
        return (
            <div className = "col-md-12">
                
                <header className = "todo-header">
                    <Intitule name={this.state.nomWidget}/>
                    <h3>Vos tâches à faire : </h3>
                    <h6>- maj des documents admin</h6>
                    <h6>- appeler le service informatique</h6>
                    <h6>- finir le bon de commande n°4320</h6>
                
                    <div>
                        <h3>Ajout de nouvelles tâches : </h3>
                        <InputGroup inside>
                            <Input placeholder={"Veuillez entrer une nouvelle tâche"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                            <InputGroup.Button><Icon icon="plus" onClick={() => alert(this.state.newTask)}/></InputGroup.Button>
                        </InputGroup>
                    </div>

                    <div>
                        <h3>Suppression d'une tâche : </h3>
                        <InputGroup inside>
                            <Input placeholder={"Veuillez entrer la tâche à supprimer"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                            <InputGroup.Button><Icon icon="plus" onClick={() => alert(this.state.newTask)}/></InputGroup.Button>
                        </InputGroup>
                    </div>
                </header>
                
            </div>
        )
    }
}
