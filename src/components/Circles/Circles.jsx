import React from 'react';
import './Circles.css';

const Circles = (props) => {
  
  const div1 = props.selectedCircle == 'First' ?
    <div className="Circles selected">1</div> : 
    <div 
    className="Circles" 
    onClick={() => props.handleCircleChange('First')}>
      1
    </div>
    

  const div2 = props.selectedCircle == 'Second' ?
    <div className="Circles selected">2</div> : 
    <div 
    className="Circles" 
    onClick={() => props.handleCircleChange('Second')}>
      2
    </div>

  const div3 = props.selectedCircle == 'Third' ?
    <div className="Circles selected">3</div> : 
    <div 
    className="Circles" 
    onClick={() => props.handleCircleChange('Third')}>
      3
    </div>

  const div4 = props.selectedCircle == 'Fourth' ?
    <div className="Circles selected">4</div> : 
    <div 
    className="Circles" 
    onClick={() => props.handleCircleChange('Fourth')}>
      4
    </div>


  return (
    <div className="Circles">
      {div1}
      {div2}
      {div3}
      {div4}
    </div>
  )
};

export default Circles;