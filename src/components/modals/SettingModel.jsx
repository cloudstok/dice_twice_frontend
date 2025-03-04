import React from "react";
import "../modals/modelMenu.css";
import { MdClose } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuHistory } from "react-icons/lu";
import { BsFillRecord2Fill } from "react-icons/bs";

function SettingModel({
  handleSetting,
  handleLimits,
  handleRules,
  setSettingModal,
  handleBetLimit,
  info,
}) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="close-icon" onClick={() => setSettingModal(false)}>
          <MdClose className="icon" />
        </div>
        <div className="modal-header-top">
          <div className="setting-text">Settings</div>
          <div className="user-input-name">
            <div className="user-input-inner">
              <div className="input-user">UserName</div>
              <p>{info.user_id}</p>
            </div>
          </div>
          <div className="setting-item-container">
            <div className="name-list">
              <div className="items-flex" onClick={handleLimits}>
                <div className="icon-round">
                  <BsFillRecord2Fill />
                </div>
                <div className="para-text">Limits</div>
              </div>
              <div className="items-flex" onClick={handleRules}>
                <div className="icon-round">
                  {/* <FcRules className="icon" /> */}
                  <p style={{ fontSize: "14px" }}>📜</p>
                </div>
                <div className="para-text">Rules</div>
              </div>
              {/* <div className="items-flex" onClick={handleBetLimit}>
                <div className="icon-round">
                  <LuHistory className="icon" />
                </div>
                <div className="para-text">My bets</div>
              </div> */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SettingModel;
