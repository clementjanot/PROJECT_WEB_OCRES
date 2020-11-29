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
import Meeting from './components/meeting';
import Explorer from './components/explorer';

function App() {
  return (
      <Container fluid>
        <Row className = "test">

          <Col lg={1} md={1} sm={1}>
            <Explorer/>
          </Col>

          <Col lg={7} md={7} sm={7}>
            <Row>
              < SuiviDesClient/>
            </Row>

            <Row>

              <Col lg={6} md={6} sm={6}>
                <Contacts/>
              </Col>

              <Col lg={6} md={6} sm={6}>
                <Row>
                  <Calendrier/>
                </Row>
                <Row>
                  <Budget/>
                </Row>
              </Col>

            </Row>
          </Col>

          <Col lg={4} md={4} sm={4}>
            <Row>
              <Actions/>
            </Row>

            <Row className = "conteneurs">
              <Meeting/>
            </Row>

            <Row className = "conteneurs">
              <ToDo/>
            </Row>
          </Col>
        
        </Row>
        
      </Container>
  )
}

export default App;