import React, { useState } from 'react';
import SVGComponent from './SvgPanel';
import BetDetails from './BetDetails';
import MinusPlusCont from './MinusPlusCont';

const MIN_AMOUNT = 10.00;
const MAX_AMOUNT = 20000.00;

const BetMain = ({ info, showBalance }) => {
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
        </div >
    );
};

export default BetMain;
