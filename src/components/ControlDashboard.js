import React from 'react';
import WaterToggleControl from './WaterToggleControl';
import WaterAmountControl from './WaterAmountControl';

class ControlDashboard extends React.Component {
  render() {
    return (
        <div style={controllerStyle}>
        <WaterToggleControl controlDashboard={this.props.controlDashboard[0]} toggleWaterControl={this.props.toggleWaterControl} />
        <WaterAmountControl controlDashboard={this.props.controlDashboard[1]} waterThisAmount={this.props.waterThisAmount}/>
        </div>
    )
  }
}

const controllerStyle = {
  border: '2px solid #000',
  padding: '2rem'
}
 export default ControlDashboard;
