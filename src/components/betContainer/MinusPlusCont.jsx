import React from 'react'
import { svgIcon } from "../../utility/svg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const MinusPlusCont = ({ handleAmountChange, handleChange,
    handleButtonClick, handleDecrease, handleIncrease, handleAmountChangeBlur,
    amount, value, setAmount, MIN_AMOUNT, MAX_AMOUNT, setValue, showValue }) => {
    return (
        <div className='bet-panel-main'>
            <div className="bet-amount-container">
                <div className="betcmnclass">
                    <div className="betinput">
                        <label className="bet-label">
                            Bet Amount
                            <span className="tooltip">
                                ⓘ
                                <div className="tooltiptext">Max Profit 250000</div>
                            </span>
                        </label>
                        <input
                            type="number"
                            step="0.1"
                            value={amount}
                            onChange={handleAmountChange}
                            onBlur={handleAmountChangeBlur}
                        />
                    </div>
                </div>

                <div className="betselect-btns">
                    <button
                        className="minbtn minuesbtn"
                        onClick={(e) => handleButtonClick(e, () => setAmount(MIN_AMOUNT.toFixed(2)))}
                        disabled={parseFloat(amount) === MIN_AMOUNT}
                    >
                        Min
                    </button>
                    <button
                        className="minuesbtn"
                        onClick={(e) => handleButtonClick(e, handleDecrease)}
                        disabled={parseFloat(amount) <= MIN_AMOUNT}
                    >
                        <p>{svgIcon.minusIcon}</p>
                    </button>
                    <button
                        className="pluesbtn"
                        onClick={(e) => handleButtonClick(e, handleIncrease)}
                        disabled={parseFloat(amount) >= MAX_AMOUNT}
                    >
                        <p>{svgIcon.plusIcon}</p>
                    </button>
                    <button
                        className="maxbtn"
                        onClick={(e) => handleButtonClick(e, () => setAmount(MAX_AMOUNT.toFixed(2)))}
                        disabled={parseFloat(amount) === MAX_AMOUNT}
                    >
                        Max
                    </button>
                </div>

                <div className="slider-container">

                    <div className="slider-arrow left-arrow" style={{ marginTop: "2px" }} onClick={() => setValue(Math.max(value - 10, 3))}>
                        <FaAngleLeft />
                    </div>

                    <div className="slider-wrapper">
                        <input
                            type="range"
                            min="3"
                            max="97"
                            value={value}
                            onChange={handleChange}
                            className="slider"

                        />
                        <div className="slider-track">
                            <div className="slider-left" style={{ width: `${((value - 3) / (97 - 3)) * 100}%` }}></div>
                            <div className="slider-right" style={{ width: `${100 - ((value - 3) / (97 - 3)) * 100}%` }}></div>
                        </div>
                        <div className="slider-thumb" style={{ left: `${((value - 3) / (97 - 3)) * 100}%` }}>
                            {showValue && (
                                <div className="slider-value">
                                    {value}
                                </div>
                            )}
                        </div>
                        <div className="range__grade">
                            <div className="range__grade-item _0">
                                <div className="range__grade-item-text">0</div>
                            </div>
                            <div className="range__grade-item _10" />
                            <div className="range__grade-item _20" />
                            <div className="range__grade-item _30" />
                            <div className="range__grade-item _40" />
                            <div className="range__grade-item _50">
                                <div className="range__grade-item-text">50</div>
                            </div>
                            <div className="range__grade-item _60" />
                            <div className="range__grade-item _70" />
                            <div className="range__grade-item _80" />
                            <div className="range__grade-item _90" />
                            <div className="range__grade-item _100">
                                <div className="range__grade-item-text">100</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <div className="slider-arrow left-arrow" style={{ marginTop: "2px" }} onClick={() => setValue(Math.min(value + 10, 97))}>
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
        </div>
    )
}

export default MinusPlusCont