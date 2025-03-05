import React, { useState } from 'react';
import img from '../assets/fon1.37507ae1.png';

const HistoryData = () => {
  const [activeMode, setActiveMode] = useState("Manual");

  return (
    <div className="multiplier-container">
      <div className="mode-btn__inner">
        <button
          className={activeMode === "Manual" ? "active" : ""}
          onClick={() => setActiveMode("Manual")}
        >
          Manual
          <div className={`radio-btn ${activeMode === "Manual" ? "checked" : ""}`} />
        </button>

        <button
          className={activeMode === "Auto" ? "active" : ""}
          onClick={() => setActiveMode("Auto")}
        >
          Auto
          <div className={`radio-btn ${activeMode === "Auto" ? "checked" : ""}`} />
        </button>
      </div>
      <div className="game-history-multi">
        <img src={img} alt="Game History" />
      </div>
    </div>
  );
};

export default HistoryData;
