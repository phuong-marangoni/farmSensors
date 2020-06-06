import React from 'react';
import WaterToggleControl from './WaterToggleControl';
import WaterAmountControl from './WaterAmountControl';
import '../css/ControlDashboard.css';

class ControlDashboard extends React.Component {
  render() {
    return (
        <div className="cStyle">
        <WaterToggleControl controlDashboard={this.props.controlDashboard[0]} toggleWaterControl={this.props.toggleWaterControl} />
        <WaterAmountControl controlDashboard={this.props.controlDashboard[1]} waterThisAmount={this.props.waterThisAmount}/>
        </div>
    )
  }
}


 export default ControlDashboard;
