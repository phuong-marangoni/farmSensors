import React from 'react';
import {Line} from 'react-chartjs-2';
import '../css/HumidityGraph.css';
import axios from 'axios';


class HumidityGraph extends React.Component {

  constructor(props){
    super(props);
    const maxDataPts = 30;
    this.state = {
      labels: new Array(maxDataPts),
      data: new Array(maxDataPts)
    }
  }

  componentDidMount() {
    // Will call this function every second
    this.myTimer = setInterval(() => this.getLiveData(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myTimer);
  }

  getLiveData = () => {

    const axios = require('axios').default;
    axios.get('http://127.0.0.1:5000/humidity')
      .then((response) => {

        const myData = response.data;

        //Update the state by first copying the state into temp arrays
        let tmpLabelsArray = [...this.state.labels];
        let tmpDataArray = [...this.state.data];

        //remove first item off the array
        tmpLabelsArray.shift();
        tmpDataArray.shift();

        //add new data to Array
        let myDate = new Date(myData.time);
        let convertedTime = myDate.getUTCHours() + ':' + myDate.getUTCMinutes() + ':' + myDate.getUTCSeconds();

        // Add the updated label and data to the state
        tmpLabelsArray.push(convertedTime);
        tmpDataArray.push(myData.humidity);
        this.setState({labels: tmpLabelsArray, data: tmpDataArray});

      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="graphStyle">
        <Line
          data={{
            labels: this.state.labels,
            datasets: [
              {
                label: 'Humidity',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#0f0',
                borderColor: '#0f0',
                borderWidth: 2,
                data: this.state.data
              }
            ]
          }}
          options={{
            title: {
              display: true,
              text: 'Live Humidity per second',
              fontSize: 20
            },
            legend: {
              display: false,
              position: 'right'
            },
            responsive: true,
            maintainAspectRatio: false
          }}
          />
      </div>
    )
  }
}

export default HumidityGraph;
