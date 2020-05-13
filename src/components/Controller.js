import React from 'react';
import WaterToggleControl from './WaterToggleControl';
import WaterAmountControl from './WaterAmountControl';

class Controller extends React.Component {
  render() {
    return (
        <div style={controllerStyle}>

        <WaterToggleControl control={this.props.controller[0]} toggleWaterControl={this.props.toggleWaterControl} />
        <WaterAmountControl control={this.props.controller[1]} waterThisAmount={this.props.waterThisAmount}/>
        </div>
    )
  }
}

const controllerStyle = {
  border: '2px solid #000',
  padding: '2rem'
}
 export default Controller;
