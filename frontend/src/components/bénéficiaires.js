import React, { useState, useEffect } from 'react';
import './bénéficiaires.css';
import { getBenef, createBenef, deleteBenef, updateBenef } from './utils/API';

import { Button, FormGroup, FormControl, Form, Row, Col } from "react-bootstrap";
import { ControlLabel } from 'rsuite';

function Gbenef() {

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
            alert("Bénéficiaire ajouté")
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
        // création d'une copie state data
        let newData = [...data];
        newData[index].nom = nom
        // maj state data
        setData(newData)
    }

    const handleChangeIBAN = (IBAN, index) => {
        // création d'une copie state data
        let newData = [...data];
        newData[index].IBAN = IBAN
        // maj state data
        setData(newData)
    }

    return (
        <header className="contacts-header">

            <h3>Bénéficiaires</h3>

            <Row>

                <Col className="colonnes" lg={6} md={6} sm={6}>

                    {data.map((benef, index) => (
                        <Form>
                            <Form>
                                <FormGroup >
                                    <ControlLabel>Nom</ControlLabel>
                                    <FormControl type="text" placeholder="Nom" onChange={e => handleChangeNom(e.target.value, index)} value={benef.nom} />
                                </FormGroup>

                                <FormGroup >
                                    <ControlLabel>IBAN</ControlLabel>
                                    <Form.Control type="text" placeholder="IBAN" onChange={e => handleChangeIBAN(e.target.value, index)} value={benef.IBAN} />
                                </FormGroup>
                            </Form>

                            <Button type="submit" onClick={() => updateBenefAction(benef)}>Mettre à jour</Button>
                            <Button type="submit" onClick={() => deleteBenefAction(benef)}>Supprimer</Button>
                        </Form>
                    ))}
                </Col>

                <Col className="colonnes" lg={6} md={6} sm={6}>

                    <Form>
                        <ControlLabel><b>Ajout de bénéficiaire : </b></ControlLabel>

                        <FormGroup>
                            <FormControl type="text" placeholder="Nom" onChange={e => setNom(e.target.value)} value={nom}></FormControl>
                        </FormGroup>

                        <FormGroup>
                            <FormControl type="text" placeholder="IBAN" onChange={e => setIBAN(e.target.value)} value={IBAN} />
                        </FormGroup>

                        <Button type="submit" onClick={createBenefAction}>Ajouter</Button>
                    </Form>

                </Col>
            </Row>
        </header>
    )

} export default Gbenef;