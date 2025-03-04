import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function RulesModal({ onClose, handleRules }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionData = [
    {
      title: "How to Play?",
      content: (
        <ul>
          <li>Use the slider to change the winning range of the chosen color</li>
          <li>Press "Roll" to generate a random outcome from 0 to 100</li>
          <li>If the result turned out to be in the selected range, the win is yours!</li>
        </ul>
      ),
    },
    {
      title: "Game Details",
      content: (
        <div className="block-inner">
          <h3>Place Bet</h3>
          <p>Enter a valid amount in the field “Amount” .<br />
            Drag the slider until you reach the desired win chance and payout. There is a circle with the colored sectors to make the evaluation of your chances easier.<br />
            After everything is settled press "Roll" and … good luck!</p>          <ul>
            <li>Black and Red give you a x2 payout.</li>
            <li>Green gives you a x14 payout.</li>
          </ul>

          <h3>Gameplay</h3>
          <p>As a player, your first task is to decide whether you believe the result of the roll will be 'over' (purple&nbsp;button)&nbsp;or 'under' (green button)&nbsp;a particular number.<br />
            You can adjust this number and the corresponding payout multiplier by dragging the payout line slider. The riskier your prediction (that is, choosing a smaller sector), the higher your potential win!<br />
            Your potential win amount is calculated by multiplying your bet amount by the payout multiplier. This means that the higher the payout multiplier, the more you stand to win if your prediction is correct.<br />
            Win amount is rounded down to two decimal places</p>

          <h3>Min &amp; Max Multiplier</h3>
          <p>Min multiplier is x1.01<br />
            Max multiplier is x32.50</p>


          <h3>Rounds History</h3>
          <p>At the top of the game screen you can see the result of the previous game rounds. Colorful outcomes stand for winning rounds, grey - for losing ones.</p>

          <h3>RTP</h3>
          <p>Game relies on a coefficient called 'RTP' (Return to Player), which is the statistical average of payouts over billions of rounds.<br />
            Please note that due to rounding down, the RTP may vary depending on the bet size.<br />
            With a bet of '1.0', the minimum RTP is 97.06%. When betting '0.1', the RTP can decrease to as low as 89.10%</p>
        </div>
      ),
    },
    {
      title: "Settings",
      content: (
        <div className="block-inner">
          <p>Click the gear icon in the top right corner of the screen to open the settings menu. In Settings you can:</p>
          <ul>
            <li>view bet limits: Minimum bet, Maximum bet, Maximum Profit</li>
            <li>turn on/off sounds</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Bets History",
      content: (
        <div className="block-inner">
          <p>At the bottom of each Turbo game there is a panel with information about:</p>
          <ul>
            <li>“All bets” - recently played games across all users</li>
            <li>“Top bets” - recent winning bets with multiplier above x10</li>
            <li>“My bets” - list of your recent bets</li>
          </ul>
          <p>You can click on any bet to see the details.</p>
        </div>
      ),
    },

    {
      title: "Disconnection Policy",
      content: (
        <div className="block-inner">
          <p>We prioritize the security and satisfaction of our players, even in the event of unexpected internet connection interruptions. Here's how we handle such situations:</p>
          <ul>
            <li>If a bet is placed before a disconnection, it will be processed on the server and everything will proceed as normal</li>
            <li>If a bet is placed after a disconnection, it will not be sent to the server, no funds will be deducted from the player's balance, and the game will not proceed</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Version",
      content: (
        <div className="block-inner">
          <p>Game version: "1.0.3"</p>
          <p>RNG version: "2.0.0"</p>
        </div>
      ),
    },
  ];

  return (
    <div className="modal-overlay-setting">
      <div className="modal-overlay">
        <div className="modal-contentRules">
          <div className="modal-header">
            <h4>Rules</h4>
            <button onClick={handleRules} className="close-btn">
              <IoClose />
            </button>
          </div>
          <hr className="hr" />
          <p className="description">
            Dice Twice is a fast-wagering game, where your task is to predict whether dice result will be over or under selected number 🎲
          </p>
          <div className="accordion">
            {accordionData.map((item, index) => (
              <div key={index} className="accordion-item">
                <button
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <span>
                    {openIndex === index ? (
                      <IoIosArrowUp style={{ width: "20px", height: "20px" }} />
                    ) : (
                      <IoIosArrowDown
                        style={{ width: "20px", height: "20px" }}
                      />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="accordion-body">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RulesModal;
