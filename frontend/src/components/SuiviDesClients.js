import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import Intitule from './Intitule';
import './SuiviDesClients.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/Lrffmzfc/';
  constructor (props){
    super (props);
    this.state ={
      nomWidget:"Suivi Des Clients",
      nomp: "Amandine",
      nouveauClient :"134"
    };
  }

  render() {
    return (
        <Container >

          <Row className="t">
            
            <Row>
              <Intitule name={this.state.nomWidget}/>
            </Row>

            <Row>
            <Col lg={2} md={2} sm={2} className="Description">
              <h4>Hi {this.state.nomp},</h4>
              <p>Aujourd'hui ton entrprise à gagner {this.state.nouveauClient} nouveaux clients . </p>
            </Col>

            <Col lg={10} md={10} sm={10}>
              <AreaChart
              width={500}
              height={150}
              data={data}
              margin={{
              top: 10, right: 30, left: 0, bottom: 0,
              }}
              >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </Col>
            </Row>
            
          </Row>
        </Container>
    );
  }
}
