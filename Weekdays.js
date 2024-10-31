import React from 'react';
import { leftClick, rightClick } from './toggle';
import Weekends from './Weekends';
import './Weekdays.css';

const Weekdays = () => {
  return (
    <div className="weekdays-container">
      <Weekends />
      <div className="button-box">
        <div style={{backgroundColor:"green"}} id="btn"></div>
        <a href="/Weekend.js">
          <button type="button" className="toggle-btn" onClick={leftClick}>
            Weekend
          </button>
        </a>
        <a href="/Weekdays.js">
          <button type="button" className="toggle-btn" onClick={rightClick}>
            Weekdays
          </button>
        </a>
      </div>
    </div>
  );
};

export default Weekdays;
