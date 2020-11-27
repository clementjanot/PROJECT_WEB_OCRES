import React from 'react';
import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ToDo from'./todo';
import Calendrier from './calendrier';
import Contacts from './contacts';

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
        </Row>
      </Container>
  )
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/