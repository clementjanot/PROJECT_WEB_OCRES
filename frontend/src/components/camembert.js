import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";
import axios from 'axios'


class ApexChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
    test:[1],
      options: {
        chart: {
          width: 280,

          type: 'pie',
        },
        labels: ['voi','lo','im'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    };
  }

  async componentDidMount(){

    try{
    await axios.get('http://localhost:3002/categoriesDepenses/5fd63b29951d210ef89bbd3d')
      .then(async response =>{
        const data1 = await response.data;
        this.setState({
          labels: data1.options.labels,
          test: data1.series,

        })
        console.log(data1.options.labels);
      
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
      

<div id="chart">
{this.state.labels}
{this.state.test}
<ReactApexChart options={this.state.options} series={this.state.test} type="pie" width={280}  />
</div>


    );
  }
}
export default ApexChart;
