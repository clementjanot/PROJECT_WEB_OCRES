import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import Intitule from './Intitule';
import './Depenses.css';
import axios from 'axios';



export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/Lrffmzfc/';
  constructor (props){
    super (props);
    this.state ={
      nomWidget:"Dépenses de la semaine",
      nomp: "Amandine",
      nouveauSolde :"",
      allData:[],
    };
  }

  async componentDidMount(){

    try{
    await axios.get('http://localhost:3002/detailsDepenses/5fd5dbb10eb2a5661082ecb3')
      .then(async response =>{
        const data = await response.data;
        this.setState({
          allData:data.data,
          nouveauSolde:data.sold,
        })
        console.log(data.data);
      
      })
      .catch((error)=>{
        console.log(error);
      })
    }
      catch(err){
        console.log(err)
      }

  }

  render() {
    return (
        <header className = "header-client">
            <Intitule name={this.state.nomWidget}/>
            
            <div className = "div-client">
              <div>
                <h4>Salut Amandine,</h4>
                <p>Ton nouveau solde est de <b>1000 €</b>. </p>
              </div>

              <div className="graph">
                <AreaChart
                width={500}
                height={150}
                data={this.state.allData}
                margin={{
                top: 10, right: 30, left: 0, bottom: 0,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="euros" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
              </div>
            </div>
        </header>
    );
  }
}
