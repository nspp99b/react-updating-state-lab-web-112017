// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClicker = (e) => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClicker}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker;
