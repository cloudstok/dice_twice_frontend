import React from 'react';
import BetPanel from './BetPanel';
import SVGComponent from './SvgPanel';
import BetDetails from './BetDetails';

const BetMain = () => {
    return (
        <div className='bet-main-container'>
            <div className='bet-panel-main'>
                <BetPanel />
            </div>
            <div className='circle-progress-main'>
                <div>
                    <SVGComponent />
                </div>
                <div>
                    {/* First BetDetails with Blue Gradient HR */}
                    <BetDetails
                        winChance={50.8}
                        payout={0.19}
                        multiplier="x1.9"
                        lineGradient="linear-gradient(to right, #00ff7f, #00c853)"

                    />

                    {/* Second BetDetails with Green Gradient HR */}
                    <BetDetails
                        winChance={49.2}
                        payout={0.19}
                        multiplier="x2.0"
                        lineGradient="linear-gradient(to right, #00c6ff, #0072ff)"

                    />
                </div>
            </div>
        </div>
    );
};

export default BetMain;
