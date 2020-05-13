import React from 'react';
import '../css/WaterAmountControl.css';

class WaterAmountControl extends React.Component {
  state = {
    amount: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.waterThisAmount(this.state.amount, this.props.control.id);
    this.setState({amount: ''})
  }

  setWaterAmount = (e) => this.setState({[e.target.name]: Number(e.target.value)});

  render(){
    return (
      <div className="waterAmountStyle">
        <h3>{this.props.control.cname}</h3>
        <form onSubmit={this.onSubmit}>
          <input className="inputStyle"
          type="text"
          name="amount"
          placeholder="Enter % of Water"
          value={this.state.amount}
          onChange={this.setWaterAmount}/>
          <input className="btnStyle" type="submit" value="Go!"/>
        </form>
        <p> Currently watering at {this.props.control.waterPercentage}%</p>
      </div>
    )
  }
}

export default WaterAmountControl;
