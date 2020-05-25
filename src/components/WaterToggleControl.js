import React from 'react';
import '../css/WaterToggleControl.css';

class WaterToggleControl extends React.Component {

  render() {

    return (
      <div className="waterToggleStyle">
      <h3>{this.props.controlDashboard.cname}</h3>
      <input
        onChange={this.props.toggleWaterControl.bind(this, this.props.controlDashboard.id)} type="checkbox"
        className="toggleInput"
        />
      </div>
    )
  }
}


export default WaterToggleControl;
