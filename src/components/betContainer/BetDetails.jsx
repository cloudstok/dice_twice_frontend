import React from "react";

const BetDetails = ({ winChance, payout, multiplier, lineGradient }) => {
    return (
        <div className="bet-details">
            <h3>Bet Details</h3>
            <hr
                style={{
                    width: "100%",
                    margin: "8px 0",
                    height: "2px", // Ensure visibility of gradient
                    border: "none",
                    backgroundImage: lineGradient
                }}
            />

            <div className="details-row">
                <span>Win Chance</span>
                <span>{winChance}%</span>
            </div>
            <div className="details-row">
                <span>Payout</span>
                <span>{payout}</span>
            </div>
            <div className="details-row">
                <span>Multiplier</span>
                <span>{multiplier}</span>
            </div>
        </div>
    );
};

export default BetDetails;
