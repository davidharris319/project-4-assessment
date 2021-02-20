import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => {
  
  const button1 = props.selectedCircle == 'First' ?
    <button className="CircleSelector selected">Circle 1 Selected</button> : 
    <button 
    className="CircleSelector" 
    onClick={() => props.handleCircleChange('First')}>
      Select Circle 1
    </button>
    

  const button2 = props.selectedCircle == 'Second' ?
    <button className="CircleSelector selected">Circle 2 Selected</button> : 
    <button 
    className="CircleSelector" 
    onClick={() => props.handleCircleChange('Second')}>
    Select Circle 2
    </button>

  const button3 = props.selectedCircle == 'Third' ?
    <button className="CircleSelector selected">Circle 3 Selected</button> : 
    <button 
    className="CircleSelector" 
    onClick={() => props.handleCircleChange('Third')}>
      Select Circle 3  
    </button>

  const button4 = props.selectedCircle == 'Fourth' ?
    <button className="CircleSelector selected">Circle 4 Selected</button> : 
    <button 
    className="CircleSelector" 
    onClick={() => props.handleCircleChange('Fourth')}>
      Select Circle 4
    </button>


  return (
    <div className="CircleSelector">
      {button1}
      {button2}
      {button3}
      {button4}
    </div>
  )
};

export default CircleSelector;