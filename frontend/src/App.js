import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ToDo from'./components/todo';
import Calendrier from './components/calendrier';
import Bénéficiaires from './components/bénéficiaires';
import SuiviDesClient from './components/SuiviDesClients';
import BudgetSemaine from './components/budgetSemaine';
import Budget from './components/Budget';
import Meeting from './components/meeting';
import Explorer from './components/explorer';

function App() {
  return (
      <Container fluid>
        <Row className = "dimension">
          <Row>
            <Col lg={1} md={1} sm={1} xs={1} xl={1}>
              <Explorer/>
            </Col>

            <Col lg={11} md={11} sm={11} xs={11} xl={11}>
              <Row>
                <Col lg={8} md={8} sm={8} xs={8} xl={8}>
                  <SuiviDesClient/>
                </Col>

                <Col lg={4} md={4} sm={4} xs={4} xl={4}>
                  <BudgetSemaine/>
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4} xs={4} xl={4}>
                  <Bénéficiaires/>
                </Col>

                <Col lg={4} md={4} sm={4} xs={4} xl={4}>
                  <Row>
                    <Calendrier/>
                  </Row>
                  <Row>
                    <Budget/>
                  </Row>
                </Col>

                <Col className = "conteneurs" lg={4} md={4} sm={4} xs={4} xl={4}>
                  <Row>
                    <Meeting/>
                  </Row>
                  <Row>
                    <ToDo/>
                  </Row>
                </Col>

              </Row>
            </Col>
          </Row>
        </Row>
      </Container>
  )
}

export default App;