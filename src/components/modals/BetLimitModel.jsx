import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { getCaller } from "../../utility/api";
import BetDetailModal from "./BetDetailModel";

function BetLimitModal({ handleBetLimit, isClose, info }) {
  const [betData, setBetData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBet, setSelectedBet] = useState(null); // State for selected bet
  const [displayLimit, setDisplayLimit] = useState(10); // State for number of records to display

  useEffect(() => {
    const getBetHistory = async () => {
      try {
        setLoading(true);
        const res = await getCaller(
          `dr/mybets?userId=${info?.user_id}&operator_id=${info?.operator_id}&limit=100`
        );
        const newData = res?.data || [];
        setBetData(newData); // Store all data
      } catch (error) {
        console.error("Error fetching bet history:", error);
      } finally {
        setLoading(false);
      }
    };

    getBetHistory();
  }, [info]);

  const handleLoadMore = () => {
    setDisplayLimit((prevLimit) => prevLimit + 10); // Increase the display limit by 10
  };

  // Function to determine the color based on the chip value
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
        return { background: "transparent" }; // Default style
    }
  };

  // Function to get the color name based on the chip value
  const getColorName = (chipValue) => {
    switch (chipValue) {
      case "0":
        return "Red";
      case "1":
        return "Green";
      case "2":
        return "Black";
      default:
        return "Unknown";
    }
  };

  return (
    <>
      <div className="overlay-1">
        <div className="modal-new-limit">
          <div className="close" onClick={handleBetLimit}>
            <IoMdClose style={{ fontSize: "18px", fontWeight: "bold" }} />
          </div>

          <div className="modal-head" style={{ paddingLeft: "0" }}>
            <div className="limit-head-bet">
              <p>My Bets</p>
            </div>
          </div>
          <hr className="hr" />

          <div
            className="modal-body"
            style={{ marginTop: "8px", maxHeight: "400px", overflowY: "auto" }}
          >
            {loading ? (
              <p>Loading...</p>
            ) : (
              <table className="betsTable">
                <thead className="table-head">
                  <tr>
                    <th>Time</th>
                    <th>Bet Amount</th>
                    <th>Color</th>
                    <th>Payout</th>
                  </tr>
                </thead>
                <tbody>
                  {betData.slice(0, displayLimit).map((bet, index) => (
                    <tr
                      key={index}
                      onClick={() => setSelectedBet(bet)}
                      style={{ cursor: "pointer" }}
                    >
                      <td>{new Date(bet.created_at).toLocaleTimeString()}</td>
                      <td>{bet.bet_amount}</td>
                      <td
                        style={getColorStyle(bet.chip)}
                        className="color-bets"
                      >{bet.multiplier}</td>
                      <td>{bet.win_amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Load More Button */}
          {betData.length > displayLimit && (
            <div className="load-more-container">
              <button className="load-more-btn" onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Show BetDetailModal when a bet is selected */}
      {selectedBet && (
        <BetDetailModal
          bet={selectedBet}
          onClose={() => setSelectedBet(null)}
        />
      )}
    </>
  );
}

export default BetLimitModal;
