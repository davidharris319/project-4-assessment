import React, { Component } from 'react';
import './App.css';
import Circles from './components/Circles/Circles';
import CircleSelector from './components/CircleSelector/CircleSelector';

const circlesIdx = {
  First: [1],
  Second: [2],
  Third: [3],
  Fourth: [4]
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedCircle: 'First',
    }
  }

  handleCircleChange = (circlesIdx) => {
    this.setState({selectedCircle: circlesIdx});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
          selectedCircle={this.state.selectedCircle}
          circlesIdx={circlesIdx}
          handleCircleChange={this.handleCircleChange}
          />
          <Circles
          selectedCircle={this.state.selectedCircle}
          circlesIdx={circlesIdx}
          handleCircleChange={this.handleCircleChange}
          />
        </main>
      </div>
    );
  }
}

export default App;