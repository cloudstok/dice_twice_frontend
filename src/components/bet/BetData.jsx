import React, { useState } from 'react'

const BetData = () => {
    const [activeButton, setActiveButton] = useState("allBets");

    const historyData = [
        { time: "12:30 PM", betAmount: "50", multiplier: "2.5x", status: "Won", payout: "125" },
        { time: "12:45 PM", betAmount: "30", multiplier: "1.8x", status: "Lost", payout: "0" },
        { time: "1:00 PM", betAmount: "40", multiplier: "3.2x", status: "Won", payout: "128" },
        { time: "1:15 PM", betAmount: "25", multiplier: "1.5x", status: "Lost", payout: "0" },
        { time: "1:30 PM", betAmount: "60", multiplier: "2.1x", status: "Won", payout: "126" },
    ];

    return (
        <>
            <div className=''>
                <div className='history-wp'></div>
            </div>

            <div className=''>
                <div className="cmnbtns-history">
                    <button
                        className={activeButton === "allBets" ? "active" : ""}
                        onClick={() => setActiveButton("allBets")}
                    >
                        All Bets
                    </button>
                    <button
                        className={activeButton === "myBets" ? "active" : ""}
                        onClick={() => setActiveButton("myBets")}
                    >
                        My Bets
                    </button>
                </div>

            </div>

            <div className='history-tablescam'>
                <div className='content'>
                    <div className='tab-content'>
                        <div className="titles">
                            <div className="titles__item">Time</div>
                            <div className="titles__item">Bet Amount</div>
                            <div className="titles__item">Multiplier</div>
                            <div className="titles__item">Status</div>
                            <div className="titles__item">Payout</div>
                        </div>
                        <div className='separator'></div>

                        {historyData.map((item, index) => (
                            <div className="titles" key={index}>
                                <div className="titles__item">{item.time}</div>
                                <div className="titles__item">{item.betAmount}</div>
                                <div className="titles__item">{item.multiplier}</div>
                                <div className="titles__item">{item.status}</div>
                                <div className="titles__item">{item.payout}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BetData