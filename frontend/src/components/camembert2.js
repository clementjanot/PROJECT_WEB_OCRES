import React, { Component } from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import ReactApexChart from "react-apexcharts";

class camembert2 extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [64.5, 35.5],
        options: {
          chart: {
            type: 'donut',
          },
        
labels: ['Budget dépensé', 'Budget à dépenser'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              labels: ['dépensé', 'A depsenser'],
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
<ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={380}  />
</div>


      );
    }
  } export default camembert2