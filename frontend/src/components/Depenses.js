import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import Intitule from './Intitule';
import './Depenses.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const data = [
  {
    name: 'Lundi', uv: 50, pv: 2400, amt: 2400,
  },
  {
    name: 'Mardi', uv: 25, pv: 1398, amt: 2210,
  },
  {
    name: 'Mercredi', uv: 30, pv: 9800, amt: 2290,
  },
  {
    name: 'Jeudi', uv: 45, pv: 3908, amt: 2000,
  },
  {
    name: 'Vendredi', uv: 15, pv: 4800, amt: 2181,
  },
  {
    name: 'Samedi', uv: 60, pv: 3800, amt: 2500,
  },
  {
    name: 'Dimanche', uv: 20, pv: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/Lrffmzfc/';
  constructor (props){
    super (props);
    this.state ={
      nomWidget:"Dépenses de la semaine",
      nomp: "Amandine",
      nouveauSolde :"948,55€"
    };
  }

  render() {
    return (
        <header className = "header-client">
            <Intitule name={this.state.nomWidget}/>
            
            <div className = "div-client">
              <div>
                <h4>Salut {this.state.nomp},</h4>
                <p>Ton nouveau solde est de <b>{this.state.nouveauSolde}</b>. </p>
              </div>

              <div className="graph">
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
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
              </div>
            </div>
        </header>
    );
  }
}
