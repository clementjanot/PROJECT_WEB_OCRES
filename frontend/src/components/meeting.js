import React, { useEffect, useState } from 'react';
import './meeting.css';
import { getMeet, deleteMeet, createMeet, updateMeet } from './utils/API';

import { Container, Button, Form, FormGroup, FormControl, FormCheck } from 'react-bootstrap';
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
            alert("erreur meeting")
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
        // création d'une copie state data
        let newData = [...data];
        newData[index].tache = tache
        // maj state data
        setData(newData)
    }

    const handleChangeHeure = (heure, index) => {
        // création d'une copie  state data
        let newData = [...data];
        newData[index].heure = heure
        // maj state data
        setData(newData)
    }

    return (
        <Container className="meeting-header" >

            <h3>Meeting du jour</h3>

            {data.map((meets, index) => (
                <Form>
                    <FormControl type="text" placeholder="Heure" onChange={e => handleChangeHeure(e.target.value, index)} value={meets.heure} />
                    <FormCheck type="checkbox" placeholder="Tache" onChange={e => handleChangeTache(e.target.value, index)} label={meets.tache} value={meets.tache} />
                    <Button type="submit" onClick={() => updateMeetAction(meets)}>Mettre à jour</Button>
                    <Button type="submit" onClick={() => deleteMeetAction(meets)}>Supprimer</Button>
                </Form>
            ))}

            <Form>

                <ControlLabel><b>Ajout d'un meeting :</b></ControlLabel>

                <FormGroup>
                    <FormControl type="date" onChange={e => setHeure(e.target.value)} value={heure} />
                </FormGroup>

                <FormGroup>
                    <FormControl type="text" placeholder="information du rdv" onChange={e => setTache(e.target.value)} value={tache} />
                </FormGroup>

                <Button type="submit" onClick={createMeetAction}>Ajouter</Button>
            </Form>

        </Container>
    )

} export default Gmeeting;