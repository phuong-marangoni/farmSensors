import React from 'react';
import Header from './components/layout/Header';
import DataDashboard from './components/DataDashboard';
import ControlDashboard from './components/ControlDashboard';
import {v4 as uuid} from 'uuid';
import './App.css';

class App extends React.Component {
  state = {
    controlDashboard: [
      {
        id: uuid(),
        cname: 'Water Control',
        waterToggleState: false
      },
      {
        id: uuid(),
        cname: 'Water Amount',
        waterPercentage: 0
      },
      {
        id: uuid(),
        cname: 'Another Water Control',
        temp: 0
      }
      ]
  }

  toggleWaterControl = (id) => {
    //Toggle state in front end
    this.setState({controlDashboard: this.state.controlDashboard.map(control => {
      if(control.id === id) {
        control.waterToggleState = !control.waterToggleState

        if (control.waterToggleState){
          console.log("Water ON!")
        }else {
          console.log("Water OFF!")
        }
      }
      return control;
    })})
  }

  waterThisAmount = (amount,id) => {

    // Need to add a constraint to only allow watering at a certain amount if the water control is turned ON.

    this.setState({controlDashboard: this.state.controlDashboard.map(control => {
      if(control.id === id) {
        if (amount > 100 || amount < 1 || isNaN(amount)) {
          console.log("You must enter an amount between 1 and 100!")
        }else {
          // Add code to talk to beagle bone to control the water
          // based off this verified amount
          console.log("Valid percentage of " + amount + "! ID: " + id)
          control.waterPercentage = amount;
        }
    }
      return control;
    })
  })
}

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <ControlDashboard className="tabcontent" controlDashboard={this.state.controlDashboard} toggleWaterControl={this.toggleWaterControl} waterThisAmount={this.waterThisAmount}/>
          <DataDashboard className="tabcontent" />
        </div>
      </div>
    );
  }
}

export default App;
