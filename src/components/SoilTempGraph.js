import React from 'react';
import {Bar} from 'react-chartjs-2';
import '../css/SoilTempGraph.css';

class HumidityGraph extends React.Component {
  render() {
    return (
      <div className="graphStyle">
        <Bar
          data={graphState}
          options={{
            title: {
              display: true,
              text: 'Soil Temp per hour',
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
  labels: ['10:00 AM', '11:00 AM', '12:00 PM',
           '1:00 PM', '2:00 PM'],
  datasets: [
    {
      label: 'Soil Temp',
      backgroundColor: '#0f0',
      borderColor: '#0f0',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}


export default HumidityGraph;
