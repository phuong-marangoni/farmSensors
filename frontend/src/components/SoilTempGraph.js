import React from 'react';
import {Bar} from 'react-chartjs-2';
import '../css/SoilTempGraph.css';

class HumidityGraph extends React.Component {
  constructor(props){
    super(props);
    const maxDataPts = 5;
    this.state = {
      labels: new Array(maxDataPts),
      data: new Array(maxDataPts)
    }
  }

  componentDidMount() {
    this.myTimer = setInterval(() => this.getLiveData(), 60000);
  }

  componentWillUnmount(){
    clearInterval(this.myTimer);
  }

  getLiveData = () => {
    const axios = require('axios').default;
    axios.get('http://127.0.0.1:5000/soiltemp')
      .then((response)=> {
        const myData = response.data;

        let myTmpLabels = [...this.state.labels];
        let myTmpData = [...this.state.data];

        myTmpLabels.shift();
        myTmpData.shift();

        let myTime = new Date(myData.time);
        let myFormattedTime = myTime.getUTCHours() + ":" + myTime.getUTCMinutes();

        myTmpLabels.push(myFormattedTime);
        myTmpData.push(myData.soiltemp);
        this.setState({labels: myTmpLabels, data: myTmpData});

        })
      .catch((error)=> {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="graphStyle">
        <Bar
          data={{
            labels: this.state.labels,
            datasets: [{
                  label: 'Soil Temp',
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
              text: 'Live Soil Temp (°F) per minute',
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
