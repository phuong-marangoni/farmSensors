import React from 'react';
import HumidityGraph from './HumidityGraph';
import SoilTempGraph from './SoilTempGraph';
import '../css/DataDashboard.css';

class DataDashboard extends React.Component {

  render(){
    return (
    <div className="dashboardStyle">
      <h2> Data Dashboard </h2>
      <HumidityGraph />
      <SoilTempGraph />
    </div>
    )
  }
}


export default DataDashboard;
