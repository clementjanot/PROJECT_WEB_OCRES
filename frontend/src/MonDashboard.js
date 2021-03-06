import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ToDo from'./components/todo';
import Calendrier from './components/calendrier';
import Beneficiaires from './components/bénéficiaires';
import DepensesParJour from './components/Depenses';
import BudgetSemaine from './components/budgetSemaine';
import Budget from './components/Budget';
import Meeting from './components/meeting';
import './MonDashboard.css'

class MDashboard extends React.Component{
  
  render (){
    return (
      <Container fluid>
        <Row>
          <Col lg={8} md={12} sm={12} >
            <Row>
              <Col className="ConteneurDepenses"><DepensesParJour/></Col>
            </Row>
            <Row>
              <Col className="ConteneurBudgetSem"><BudgetSemaine/></Col>
              <Col className="ConteneurBudget"><Budget/></Col>
            </Row>
            <Row>
              <Col className="ConteneurBeneficairest" ><Beneficiaires/></Col>
            </Row>
          </Col>
          <Col className = "conteneurs" lg={4} md={12} sm={12} xs={12}>
            <Row>
              <Col className = "conteneurMeeting"><Meeting/></Col>
            </Row>
            <Row>
              <Col className = "conteneurTodo"><ToDo/></Col>
            </Row>
            <Row>
              <Col className = "conteneurCalen"><Calendrier/></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
    
  }

}export default MDashboard;
