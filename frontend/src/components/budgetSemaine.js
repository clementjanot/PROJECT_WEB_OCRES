import React from 'react';
import './budgetSemaine.css';
import Intitule from './Intitule';

import Camembert2 from './camembert2'
import axios from 'axios'


class BudgetSemaine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameWidget : "Budget de la semaine",
            series: [1,1],
            montantBudget:"",
            montantDepenses:"",
            montantRestant:"",
        };
    }

    async componentDidMount(){

        try{
        await axios.get('http://localhost:3002/bugetSemaine/5fd61d02de5e333b887b78a3')
          .then(async response =>{
            const data = await response.data;
            this.setState({
              series: data.series,
              montantBudget : data.montantBudget,
              montantDepenses :data.montantDesDepenses,
              montantRestant : data.montantRestant,
            })
            console.log(data);
          
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
                <div className = "semaine-header">
                    <Intitule name={this.state.nameWidget}/>
                    <div className="rrrrr">
                            <p>Vous vous étiez fixé un budget de <b>{this.state.montantBudget} €</b> pour cette semaine.</p>
                    
                            <p>Il vous reste <b>{this.state.montantRestant} €</b>.</p>
                            <Camembert2 dep={this.state.series}/>
                            </div>
                    
                </div>
        )
    }
}
export default BudgetSemaine;