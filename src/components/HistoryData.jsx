import React from 'react';
import img from '../assets/fon1.37507ae1.png';

const HistoryData = () => {
  return (
    <div className="multiplier-container">
      <div className="mode-btn__inner">
        <button>Manual</button>
      </div>
      <div className="game-history-multi">
        <img src={img} alt="Game History" />
      </div>
    </div>
  );
};

export default HistoryData;
