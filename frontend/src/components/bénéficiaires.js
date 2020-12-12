import React, {useState, useEffect} from 'react';
import './bénéficiaires.css';
import Intitule from './Intitule';
import {getBenef, createBenef, deleteBenef, updateBenef} from '../../utils/API';

import {Button, FormGroup, FormControl, Form, Row, Col, ListGroup} from "react-bootstrap";
import {ControlLabel} from 'rsuite';

export default class todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nomWidget : "Bénéficiaires",
        }
    }


    render() {

        const [nom, setNom] = useState(null)
        const [IBAN, setIBAN] = useState(null)
        const [data, setData] = useState([])

        useEffect(() => {
            getBenefAction()
        }, [])
        
        const getBenefAction = () => {
            getBenef().then(res => {
                setData(res.data)
            }).catch(e => {
                alert(e)
            })
        }

        const createBenefAction = () => {
            createBenef(nom, IBAN).then(res => {
                getBenefAction()
            }).catch(e => {
                alert(e)
            })
        }

        const deleteBenefAction = (benef) => {
            deleteBenef(benef._id).then(res => {
                getBenefAction()
            }).catch(e => {
                alert(e)
            })
        }

        const updateBenefAction = (benef) => {
            updateBenef(benef).then(res => {
                alert("Maj réussie")
                getBenefAction()
            }).catch(e => {
                alert(e)
            })
        }

        const handleChangeNom = (nom, index) => {
            // on créée une copie du state data
            let newData = [...data];
            newData[index].nom = nom
            // on met à jour le state data
            setData(newData)
        }
    
        const handleChangeIBAN = (IBAN, index) => {
            // on créé une copie du state data
            let newData = [...data];
            newData[index].IBAN = IBAN
            // on mets à jour le satte data
            setData(newData)
        }

        if (this.props.bene == null || this.props.bene < 2) {
            return (<p>Aucun RDV.</p>);
        }
        else {
            return (

                <header className = "contacts-header">
                    <Intitule name={this.state.nomWidget}/>                        
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            {data.map((benef, index) => (
                                <ListGroup.Item key={"ecran" + index}>
                                    <Form>
                                        <Form.Group >
                                            <ControlLabel>Noms</ControlLabel>
                                            <Form.Control type="text" placeholder="Nom" onChange={e => handleChangeNom(e.target.value, index)} value={benef.nom} />
                                            <Button onClick={deleteBenefAction(benef)} block bsSize="large" type="submit">Supprimer</Button>
                                        </Form.Group>

                                        <Form.Group >
                                            <ControlLabel>IBAN</ControlLabel>
                                            <Form.Control type="text" placeholder="IBAN" onChange={e => handleChangeIBAN(e.target.value, index)} value={benef.IBAN} />
                                            <Button onClick={deleteBenefAction(benef)} block bsSize="large" type="submit">Supprimer</Button>
                                        </Form.Group>
                                    </Form>

                                    <Button onClick={() => updateBenefAction(benef)}>Mettre à jour</Button>
                                    
                                </ListGroup.Item>
                            ))}
                        </Col>

                        <Col className = "colonne2" lg={6} md={6} sm={6}>
                                
                            <Form>
                                <h3>Ajout de bénéficiaire : </h3>

                                <FormGroup>
                                    <ControlLabel>Nom du bénéficiaire</ControlLabel>
                                    <Form.Control type="text" placeholder="Nom" onChange={e => setNom(e.target.nom)} value={nom} />
                                </FormGroup>

                                <FormGroup>
                                    <ControlLabel>IBAN</ControlLabel>
                                    <FormControl type="text" placeholder="IBAN" onChange={e => setIBAN(e.target.IBAN)} value={IBAN} />
                                </FormGroup>
                                <Button onClick={createBenefAction} block bsSize="large" type="submit">Ajouter</Button>
                            </Form>

                        </Col>
                    </Row>
                </header>
           
        )
        }
        
    }
}