import React, { useEffect, useState } from 'react';
import './meeting.css';

import { getMeet, deleteMeet, createMeet, updateMeet } from './utils/API';

import { Row, Col, Container, Button, ListGroup, FormGroup, FormControl, Form } from 'react-bootstrap';
import { ControlLabel } from 'rsuite';

function Gmeeting() {

    const [tache, setTache] = useState(null)
    const [heure, setHeure] = useState(null)
    const [data, setData] = useState([])

    useEffect(() => {
        getMeetAction()
    }, [])

    const getMeetAction = () => {
        getMeet().then(res => {
            setData(res.data)
        }).catch(e => {
            alert(e)
        })
    }
    
    const createMeetAction = () => {
        createMeet(tache, heure).then(res => {
            alert("Meet ajouté")
            getMeetAction()
        }).catch(e => {
            alert(e)
        })
    }

    const updateMeetAction = (meets) => {
        updateMeet(meets).then(res => {
            alert("Maj réussie")
            getMeetAction()
        }).catch(e => {
            alert(e)
        })
    }

    const deleteMeetAction = (meets) => {
        deleteMeet(meets._id).then(res => {
            getMeetAction()
        }).catch(e => {
            alert(e)
        })
    }

    const handleChangeTache = (tache, index) => {
        // on crée une copie du state data
        let newData = [...data];
        newData[index].tache = tache
        // on met à jour le state data
        setData(newData)
    }

    const handleChangeHeure = (heure, index) => {
        // on crée une copie du state data
        let newData = [...data];
        newData[index].heure = heure
        // on met à jour le state data
        setData(newData)
    }

    return (

        <div className="meeting-header" >

            <h3>Meeting du jour</h3>

            {data.map((meets, index) => (
                <ListGroup.Item key={"meets" + index}>
                    <Form.Control type="text" placeholder="Heure" onChange={e => handleChangeHeure(e.target.value, index)} value={meets.heure} />
                    <Form.Check type="checkbox" placeholder="Tache" onChange={e => handleChangeTache(e.target.value, index)} label={meets.tache} value={meets.tache} />
                    <Button type="submit" onClick={() => updateMeetAction(meets)}>Mettre à jour</Button>
                    <Button type="submit" onClick={() => deleteMeetAction(meets)}>Supprimer</Button>
                </ListGroup.Item>
            ))}

            <Form>

                <ControlLabel><b>Ajout d'un meeting :</b></ControlLabel>

                <FormGroup>
                    <ControlLabel>Heure</ControlLabel>
                    <Form.Control type="text" placeholder="YYYY-MM-DD" onChange={e => setHeure(e.target.heure)} value={heure} />
                </FormGroup>

                <FormGroup>
                    <ControlLabel>infos rdv</ControlLabel>
                    <FormControl type="text" placeholder="tache" onChange={e => setTache(e.target.tache)} value={tache} />
                </FormGroup>

                <Button type="submit" onClick={() => createMeetAction}>Ajouter</Button>
            </Form>
        </div>


    )
} export default Gmeeting;