import React, {useState, useEffect} from 'react';
import './todo.css';
import { getTodo, createTache, deleteTache, updateTodo } from './utils/API';

import { Row, Col, Container, Button, ListGroup, FormGroup, FormControl, Form } from 'react-bootstrap';
import { ControlLabel } from 'rsuite';

function Gtodo() {

    const [tache, setTache] = useState(null)
    const [date, setDate] = useState(null)
    const [data, setData] = useState([])

    useEffect(() => {
        getTodoAction()
    }, [])

    const getTodoAction = () => {
        getTodo().then(res => {
            setData(res.data)
        }).catch(e => {
            alert(e)
        })
    }

    const createTacheAction = () => {
        createTache(tache, date).then(res => {
            alert("Tâche ajoutée")
            getTodoAction()
        }).catch(e => {
            alert(e)
        })
    }

    const deleteTacheAction = (todo) => {
        deleteTache(todo._id).then(res => {
            getTodoAction()
        }).catch(e => {
            alert(e)
        })
    }

    const updateTodoAction = (todo) => {
        updateTodo(todo).then(res => {
            alert("Maj réussie")
            getTodoAction()
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

    const handleChangeDate = (date, index) => {
        // on crée une copie du state data
        let newData = [...data];
        newData[index].date = date
        // on met à jour le state data
        setData(newData)
    }

    return (
        <Container className="todo-header">

            <h3>To do list</h3>

                {data.map((todo, index) => (
                    <ListGroup.Item key={"todo" + index}>
                        <Form.Control type="text" placeholder="Date" onChange={e => handleChangeDate(e.target.value, index)} value={todo.date} />
                        <Form.Check type="checkbox" placeholder="Tache" onChange={e => handleChangeTache(e.target.value, index)} label={todo.tache} value={todo.tache} />
                        <Button type="submit" onClick={() => updateTodoAction(todo)}>Mettre à jour</Button>
                        <Button type="submit" onClick={() => deleteTacheAction(todo)}>Supprimer</Button>
                    </ListGroup.Item>
                ))}

                <Form>

                    <ControlLabel><b>Ajout d'une tâche :</b></ControlLabel>

                    <FormGroup>
                        <ControlLabel>Date</ControlLabel>
                        <Form.Control type="text" placeholder="YYYY-MM-DD" onChange={e => setDate(e.target.date)} value={date} />
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>A faire</ControlLabel>
                        <FormControl type="text" placeholder="tache" onChange={e => setTache(e.target.tache)} value={tache} />
                    </FormGroup>

                    <Button variant="primary" type="button" onClick={createTacheAction}>Ajouter</Button>
                </Form>

        </Container>

    )
} export default Gtodo;
