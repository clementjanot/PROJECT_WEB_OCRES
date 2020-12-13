import React, { useEffect, useState } from 'react';
import './meeting.css';

import { getMeet } from './utils/API';

import {Form, ListGroup} from 'react-bootstrap';
import {ControlLabel} from 'rsuite';

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
            {data.map((meets, index) => (
                <ListGroup.Item key={"meets" + index}>
                    <ControlLabel>Tâches à faire</ControlLabel>
                    <Form.Control type="text" placeholder="Heure" onChange={e => handleChangeHeure(e.target.value, index)} value={meets.heure} />
                    <Form.Check type="checkbox" placeholder="Tache" onChange={e => handleChangeTache(e.target.value, index)} label={meets.tache} />
                </ListGroup.Item>
            ))}
        </div>


    )
}export default Gmeeting;