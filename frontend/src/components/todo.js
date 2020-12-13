import React, { useState, useEffect } from 'react';
import './todo.css';
import { getTodo, createTache, deleteTache, updateTodo } from './utils/API';

import { Container, Button, FormCheck, FormGroup, FormControl, Form } from 'react-bootstrap';
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
        // création d'une copie state data
        let newData = [...data];
        newData[index].tache = tache
        // maj state data
        setData(newData)
    }

    const handleChangeDate = (date, index) => {
        // création d'une copie state data
        let newData = [...data];
        newData[index].date = date
        // maj state data
        setData(newData)
    }

    return (
        <Container className="todo-header">

            <h3>To do list</h3>

            {data.map((todo, index) => (
                <Form>
                    <FormControl type="text" placeholder="Date" onChange={e => handleChangeDate(e.target.value, index)} value={todo.date} />
                    <FormCheck type="checkbox" placeholder="Tache" onChange={e => handleChangeTache(e.target.value, index)} label={todo.tache} value={todo.tache} />
                    <Button type="submit" onClick={() => updateTodoAction(todo)}>Mettre à jour</Button>
                    <Button type="submit" onClick={() => deleteTacheAction(todo)}>Supprimer</Button>
                </Form>
            ))}

            <Form>

                <ControlLabel><b>Ajout d'une tâche :</b></ControlLabel>

                <FormGroup>
                    <FormControl type="date" onChange={e => setDate(e.target.value)} value={date} />
                </FormGroup>

                <FormGroup>
                    <FormControl type="text" placeholder="tâche à faire" onChange={e => setTache(e.target.value)} value={tache} />
                </FormGroup>

                <Button type="submit" onClick={createTacheAction}>Ajouter</Button>
            </Form>

        </Container>
    )

} export default Gtodo;