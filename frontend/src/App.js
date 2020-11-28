import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ToDo from'./components/todo';
import Calendrier from './components/calendrier';
import Contacts from './components/contacts';
import SuiviDesClient from './components/SuiviDesClients';
import Actions from './components/CoursDesActions';
import Intitule from './components/Intitule';
import Budget from './components/Budget';

function App() {
  return (
      <Container fluid>
        <Row className = "test">
          <Col>
          <SuiviDesClient/>
          </Col>
          <Col>
          <Actions/>
          </Col>
        </Row>
        <Row className = "test">
          <Col>
          <Contacts/>
           
          </Col>
          <Col>
            <Calendrier/>
          </Col>
          <Col>
          <ToDo/>
          </Col>
        </Row>
        <Row>
          <Col>
          <Budget/>
          </Col>
        </Row>
        
      </Container>
  )
}
export default App;

