import React from 'react';
import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ToDo from'./todo';
import Calendrier from './calendrier';
import Contacts from './contacts';
import SuiviDesClient from './SuiviDesClients';
import TTest1 from './CoursDesActions';
import Intitule from './Intitule';

function App() {
  return (
      <Container>
        <Row className = "test">
          <Col>
            <ToDo/>
          </Col>
          <Col>
            <Calendrier/>
          </Col>
          <Col>
            <Contacts/>
          </Col>
          <Col>
          <SuiviDesClient/>
          </Col>
          <Col>
          <TTest1/>
          </Col>
        </Row>
      </Container>
  )
}
export default App;

