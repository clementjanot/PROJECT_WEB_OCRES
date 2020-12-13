import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class camembert2 extends Component {
    constructor(props) {
      super(props);
 
      this.state = {
      
        series: [1,1],
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
        <ReactApexChart options={this.state.options} series={this.props.dep} type="donut" width={300}  />
      </div>
      );
    }
  } export default camembert2