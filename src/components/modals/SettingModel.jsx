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
              <div className="items-flex" onClick={handleBetLimit}>
                <div className="icon-round">
                  <LuHistory className="icon" />
                </div>
                <div className="para-text">My bets</div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="sound-container">
          <div className="sound-content">
            <div className="items-flex">
              <div className="icon-round">
                {volume === 0 ? <GoMute className="icon" /> : <HiSpeakerWave className="icon" />}
              </div>
              <div className="para-text">Sound</div>
            </div>
            <div className="slider-container">
              <div className="range-slider">
                <input
                  className="range-input"
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                />
                <div className="range-input-bg">
                  <div className="range-bg-inner">
                    <div className="range-active" style={{ width: `${volume * 100}%` }}></div>
                  </div>
                </div>
                <div
                  className="range-btn"
                  style={{ left: `calc(${volume * 100}% - 12px)` }}
                >
                  {volume === 0 ? <GoMute className="sound-icon" /> : <HiSpeakerWave className="sound-icon" />}
                </div>
              </div>
            </div>
          </div>
          <div className="sound-content">
            <div className="items-flex">
              <div className="icon-round">
                {musicVolume === 0 ? <TbMusicOff className="icon" /> : <IoMusicalNotesSharp className="icon" />}
              </div>
              <div className="para-text">Music</div>
            </div>
            <div className="slider-container">
              <div className="range-slider">
                <input
                  className="range-input"
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={musicVolume}
                  onChange={(e) => setMusicVolume(parseFloat(e.target.value))}
                />
                <div className="range-input-bg">
                  <div className="range-bg-inner">
                    <div className="range-active" style={{ width: `${musicVolume * 100}%` }}></div>
                  </div>
                </div>
                <div
                  className="range-btn"
                  style={{ left: `calc(${musicVolume * 100}% - 12px)` }}
                >
                  {musicVolume === 0 ? <TbMusicOff className="sound-icon" /> : <IoMusicalNotesSharp className="sound-icon" />}
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default SettingModel;
