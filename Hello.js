
import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        yaxis: {
          title: {
            text: "Temperature",
        },
          labels: {
            formatter: function (value) {
              return `${value} °` ;
            }
          },
        },
        xaxis: {
          title: {
            text: "Time",
        },
          labels: {
            format: 'ss', 
            formatter: function (value) {
              return `${value.toFixed(2)} s`;
            }
          }
        }
      },
      series: [{
        data: [
          {
            x: 59.91,
            y: 10
          },
          {
            x: 57.53,
            y: 20
          },
          {
            x: 84.16,
            y: 39
          },
          {
            x: 74.65,
            y: 22
          },
          {
            x: 65.08,
            y: 66
          },
          {
            x: 37.27,
            y: 48
          },
          {
            x: 69.83,
            y: 96
          },
          {
            x: 21.63,
            y: 19
          },
          {
            x: 13.61,
            y: 28
          },
          {
            x: 62.08,
            y: 44
          },
          {
            x: 36.9,
            y: 17
          },
          {
            x: 40.73,
            y: 37
          },
          {
            x: 65.29,
            y: 50
          },
          {
            x: 31.01,
            y: 61
          },
          {
            x: 62.17,
            y: 26
          },
          {
            x: 9.58,
            y: 70
          },
          {
            x: 77.63,
            y: 80
          },
          {
            x: 90.85,
            y: 74
          },
          {
            x: 30.42,
            y: 96
          },
          {
            x: 2.22,
            y: 90
          },
          {
            x: 61.07,
            y: 75
          },
          {
            x: 84.82,
            y: 70
          },
          {
            x: 59.12,
            y: 9
          }
         ]
      }],
    };
  }
  

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
