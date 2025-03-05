import React, { useState } from 'react';
import SVGComponent from './SvgPanel';
import BetDetails from './BetDetails';
import MinusPlusCont from './MinusPlusCont';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const MIN_AMOUNT = 10.00;
const MAX_AMOUNT = 20000.00;

const BetMain = () => {
    const [amount, setAmount] = useState(MIN_AMOUNT.toFixed(2));
    const [errorInput, setErrorInput] = useState("");
    const [errorInputModal, setErrorInputModal] = useState(false);
    const [value, setValue] = useState(50);
    const [showValue, setShowValue] = useState(false);

    const winChance1 = value;
    const winChance2 = 100 - value;
    const payout1 = (100 / winChance1).toFixed(2);
    const payout2 = (100 / winChance2).toFixed(2);
    const multiplier1 = `x${(2 - (value / 100)).toFixed(2)}`;
    const multiplier2 = `x${(1 + (value / 100)).toFixed(2)}`;

    const validateAmount = (value) => {
        const numericValue = Number(value);
        if (!value || numericValue < MIN_AMOUNT) {
            setErrorInput("Minimum bet amount is 10.00");
            setErrorInputModal(true);
        } else if (numericValue > MAX_AMOUNT) {
            setErrorInput("Maximum bet amount is 20000.00");
            setErrorInputModal(true);
        } else {
            setErrorInput("");
            setErrorInputModal(false);
        }
    };

    const handleAmountChange = (event) => {
        let inputValue = event.target.value.replace(/[^0-9.]/g, "");
        if (inputValue) {
            let numericValue = parseFloat(inputValue);
            numericValue = Math.min(numericValue, MAX_AMOUNT);
            setAmount(numericValue.toFixed(2));
            validateAmount(numericValue);
        } else {
            setAmount("");
        }
    };

    const handleAmountChangeBlur = () => {
        let numericValue = parseFloat(amount);
        if (isNaN(numericValue) || numericValue < MIN_AMOUNT) {
            setAmount(MIN_AMOUNT.toFixed(2));
        } else if (numericValue > MAX_AMOUNT) {
            setAmount(MAX_AMOUNT.toFixed(2));
        }
    };

    const handleIncrease = () => {
        let numericValue = parseFloat(amount) + MIN_AMOUNT;
        numericValue = Math.min(numericValue, MAX_AMOUNT);
        setAmount(numericValue.toFixed(2));
    };

    const handleDecrease = () => {
        let numericValue = parseFloat(amount) - MIN_AMOUNT;
        numericValue = Math.max(numericValue, MIN_AMOUNT);
        setAmount(numericValue.toFixed(2));
    };

    const handleChange = (e) => {
        setValue(Number(e.target.value));
        setShowValue(true);
        setTimeout(() => {
            setShowValue(false);
        }, 2000);
    };

    const handleButtonClick = (event, action) => {
        action();
        const button = event.currentTarget;
        button.classList.add("btn-click-effect", "btn-active");
        setTimeout(() => {
            button.classList.remove("btn-click-effect", "btn-active");
        }, 300);
    };
    return (
        <div className='bet-main-container'>
            <MinusPlusCont
                handleAmountChange={handleAmountChange}
                handleButtonClick={handleButtonClick}
                handleChange={handleChange}
                handleDecrease={handleDecrease}
                handleIncrease={handleIncrease}
                handleAmountChangeBlur={handleAmountChangeBlur}
                amount={amount}
                value={value}
                setAmount={setAmount}
                setValue={setValue}
                showValue={showValue}
                MIN_AMOUNT={MIN_AMOUNT}
                MAX_AMOUNT={MAX_AMOUNT}
            />
            <div className='circle-progress-main'>
                <div className='circle-progress-main-mobile'>
                    <div>
                        <SVGComponent />
                    </div>
                    <div>
                        <BetDetails
                            winChance={winChance1}
                            payout={payout1}
                            multiplier={multiplier1}
                            lineGradient="linear-gradient(to right, #00ff7f, #00c853)"
                        />
                        <BetDetails
                            winChance={winChance2}
                            payout={payout2}
                            multiplier={multiplier2}
                            lineGradient="linear-gradient(to right, #00c6ff, #0072ff)"
                        />
                    </div>
                </div>
                {/* Slider should appear here on mobile */}
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

                    <div className="slider-arrow left-arrow" style={{ marginTop: "2px" }} onClick={() => setValue(Math.min(value + 10, 97))}>
                        <FaAngleRight />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BetMain;
