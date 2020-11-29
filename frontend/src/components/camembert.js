import React, { Component } from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import ReactApexChart from "react-apexcharts";


class ApexChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Logement', 'Alim', 'Banque', 'Transports', 'Loisirs'],
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



  render() {
    return (
      

<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={280} />
</div>


    );
  }
}
export default ApexChart;
