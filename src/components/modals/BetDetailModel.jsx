import React from "react";
import { IoMdClose } from "react-icons/io";
import { icon } from "../../utility/icon";

function BetDetailModal({ bet, onClose }) {
  // Function to determine chip background color and text
  const getColorStyle = (chipValue) => {
    switch (chipValue) {
      case 0:
        return {
          background:
            "linear-gradient(140.26deg, #e12732 -29.29%, #f16069 129.55%)",
        }; // Red gradient
      case 1:
        return {
          background:
            "linear-gradient(144.64deg, #26756a -37.72%, #17d1b0 125.87%)",
        }; // Green gradient
      case 2:
        return {
          background:
            "linear-gradient(140.26deg, #000000 -29.29%, #434343 129.55%)",
        }; // Black gradient
      default:
        return { background: "transparent", color: "black", label: "N/A" }; // Default style
    }
  };

  // Get chip style and label
  const chipStyle = getColorStyle(Number(bet.chip));

  return (
    <div className="overlay-1">
      <div className="modal-new-limit">
        {/* Close Button */}
        <div className="close" onClick={onClose}>
          <IoMdClose style={{ fontSize: "18px", fontWeight: "bold" }} />
        </div>

        {/* Modal Header */}
        <div className="modal-head">
          <img src={icon.logo} alt="Logo" />
        </div>
        <hr className="hr" />

        {/* Modal Content */}
        <div className="content">
          <div className="content-section">
            <p>
              <strong>Player ID:</strong> <span>{bet.lobby_id}</span>
            </p>
            <p>
              <strong>Nickname:</strong> <span>{bet.user_id}</span>
            </p>
            <p>
              <strong>Time:</strong>{" "}
              <span>{new Date(bet.created_at).toLocaleString()}</span>
            </p>
          </div>

          {/* Bet Details */}
          <div className="content-amount">
            <div className="bet-amount-content">
              <p>Bet Amount:</p>
              <h6>{bet.bet_amount}</h6>
            </div>

            {/* Chip Color Box with Background Style */}
            <div className="bet-amount-content" style={chipStyle}>
              <h6>{bet.multiplier}</h6>
            </div>

            <div className="bet-amount-content">
              <p>Payout:</p>
              <h6>{bet.win_amount}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BetDetailModal;
