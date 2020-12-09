import React, { Component } from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import ReactApexChart from "react-apexcharts";


class ApexChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      //series: [21, 16, 4, 9, 13,5],
      /*options: {
        chart: {
          width: 280,

          type: 'pie',
        },
        labels: ['Logement', 'Alimentation', 'Banque', 'Transports', 'Loisirs'],
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
      }*/
    
    
    };
  }



  render() {
    return (
      

<div id="chart">
<ReactApexChart options={this.props.budgetDep.options} series={this.props.budgetDep.series} type="pie" width={280}  />
</div>


    );
  }
}
export default ApexChart;
