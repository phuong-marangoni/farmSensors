import React from 'react';
import {Line} from 'react-chartjs-2';
import '../css/HumidityGraph.css';

class HumidityGraph extends React.Component {
  render() {
    return (
      <div className="graphStyle">
        <Line
          data={graphState}
          options={{
            title: {
              display: true,
              text: 'Humidity per minute',
              fontSize: 20
            },
            legend: {
              display: false,
              position: 'right'
            },
            responsive: true,
            maintainAspectRatio: true
          }}
          />
      </div>
    )
  }
}

const graphState = {
  labels: ['10:00 AM', '10:01 AM', '10:02 AM',
           '10:03 AM', '10:04 AM'],
  datasets: [
    {
      label: 'Humidity',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#0f0',
      borderColor: '#0f0',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}


export default HumidityGraph;
