import React, { useState } from "react";
import { svgIcon } from "../../utility/svg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const BetPanel = () => {
    const [amount, setAmount] = useState(0.1);
    const [value, setValue] = useState(50);

    const handleIncrease = () => {
        setAmount((prev) => parseFloat((prev + 0.1).toFixed(1)));
    };

    const handleDecrease = () => {
        setAmount((prev) => (prev > 0.1 ? parseFloat((prev - 0.1).toFixed(1)) : prev));
    };

    const handleMin = () => {
        setAmount(0.1);
    };

    const handleMax = () => {
        setAmount(100);
    };

    const handleChange = (e) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value) && value >= 0.1 && value <= 100) {
            setAmount(value);
        }
    };

    const handleSliderDecrease = () => {
        setValue((prev) => Math.max(0, prev - 10));
    };

    const handleSliderIncrease = () => {
        setValue((prev) => Math.min(100, prev + 10));
    };

    return (
        <div className="bet-amount-container">
            <div className="betcmnclass">
                <div className="betinput">
                    <label className="bet-label">
                        Bet Amount
                        <span className="tooltip"> ⓘ
                            <div className="tooltiptext">Max Profit 250000</div>
                        </span>
                    </label>
                    <input
                        type="number"
                        step="0.1"
                        value={amount}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="betselect-btns">
                <button className="minbtn minuesbtn" onClick={handleMin} disabled={amount === 0.1}>Min</button>
                <button className="minuesbtn" onClick={handleDecrease} disabled={amount <= 0.1}>
                    <p>{svgIcon.minusIcon}</p>
                </button>
                <button className="pluesbtn" onClick={handleIncrease} disabled={amount >= 100}>
                    <p>{svgIcon.plusIcon}</p>
                </button>
                <button className="maxbtn" onClick={handleMax} disabled={amount === 100}>Max</button>
            </div>

            <div className="slider-container">
                {/* Left Arrow */}
                <div className="slider-arrow left-arrow" onClick={handleSliderDecrease}>
                    <FaAngleLeft />
                </div>

                {/* Slider Wrapper */}
                <div className="slider-wrapper">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="slider"
                    />
                    <div className="slider-track">
                        <div className="slider-left" style={{ width: `${value}%` }}></div>
                        <div className="slider-right" style={{ width: `${100 - value}%` }}></div>
                    </div>
                    <div className="slider-thumb" style={{ left: `${value}%` }}></div>
                    <div className="slider-labels">
                        <span>1</span>
                        <span>25</span>
                        <span>50</span>
                        <span>75</span>
                        <span>100</span>
                    </div>
                </div>

                {/* Right Arrow */}
                <div className="slider-arrow left-arrow" onClick={handleSliderIncrease}>
                    <FaAngleRight />
                </div>
            </div>

            <div className="buttons">
                <button className="roll-button under">
                    <span>Roll</span>
                    <span>Under {value}</span>
                </button>
                <button className="roll-button over">
                    <span>Roll</span>
                    <span>Over {value}</span>
                </button>
            </div>
        </div>
    );
};

export default BetPanel;
