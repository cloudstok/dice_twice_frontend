import React, { useState, useContext, useEffect } from "react";
import { MdOutlineVolumeOff, MdOutlineVolumeUp } from "react-icons/md";
import { IoIosArrowBack, IoMdSettings } from "react-icons/io";
import SettingModal from "../components/modals/SettingModel";
import "./header.css";
import Limits from "./modals/Limits";
import RulesModal from "./modals/RulesModal";
import BetLimitModal from "./modals/BetLimitModel";
import { SoundContext } from "../context/SoundContext";
import { playBgMusic, pauseBgMusic } from "../utility/gameSettings";
import { FaMusic } from "react-icons/fa";
import { MdOutlineMusicOff } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = ({ info, queryParams }) => {
  const { sound, setSound, music, setMusic } = useContext(SoundContext);
  const [settingModal, setSettingModal] = useState(false);
  const [openLimits, setOpenLimits] = useState(false);
  const [openRules, setOpenRules] = useState(false);
  const [openBetModal, setBetModal] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLobbyModal, setShowLobbyModal] = useState(false);

  const toggleSound = (e) => {
    e.stopPropagation();
    setSound((prevSound) => !prevSound);
  };

  // const toggleMusic = (e) => {
  //   e.stopPropagation();
  //   if (music) {
  //     pauseBgMusic();
  //   } else {
  //     playBgMusic();
  //   }
  //   setMusic((prevMusic) => !prevMusic);
  // };

  const handleSetting = () => {
    setSettingModal((prev) => !prev);
  };

  const handleLimits = () => {
    setOpenLimits((prev) => !prev);
    setSettingModal(false);
  };

  // const handleBetLimit = () => {
  //   setBetModal((prev) => !prev);
  //   setSettingModal(false);
  // };

  const handleRules = () => {
    setOpenRules((prev) => !prev);
    setSettingModal(false);
  };

  useEffect(() => {
    setSound(true);
    setMusic(true);
    playBgMusic();
  }, [setSound, setMusic]);

  return (
    <>
      <div className="game-header">
        <div className="game-header__back " onClick={() => setShowLobbyModal(true)}>
          <IoIosArrowBack style={{ fontWeight: "bold", cursor: "pointer" }} />

          {showLobbyModal && (
            <div
              className="modal-overlay-popup"
              onClick={() => setShowLobbyModal(false)}
            >
              <div className="modal-home" onClick={(e) => e.stopPropagation()}>
                <div className="modal-text">
                  Do you want to return to the lobby?
                </div>
                <div className="modal-actions">
                  <button
                    className="btn-text btn-cancel"
                    onClick={() => setShowLobbyModal(false)}
                  >
                    Cancel
                  </button>
                  <Link
                    to={`https://lobbydesign.ayodhya365.co/?id=${queryParams.id}`} // Staging
                    // to={`https://lobby.unicon.vip/?id=${queryParams.id}`} // Production
                    className="btn-text btn-confirm"
                    onClick={() => setShowLobbyModal(false)}
                  >
                    Confirm
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="game-header-logo"></div>
        <div className="game-header-balance-title">Balance: </div>
        <div className="game-header-balance">
          <div className="game-header-balance-text">{info.balance}</div>
        </div>
        <div className="game-header-buttons">
          <div className="game-header-button">
            <div className="game-header__back" onClick={toggleSound}>
              {sound ? (
                <MdOutlineVolumeUp style={{ height: "20px", width: "20px" }} />
              ) : (
                <MdOutlineVolumeOff
                  style={{ height: "20px", width: "20px", opacity: "0.5" }}
                />
              )}
            </div>
          </div>

          {/* <div className="game-header-button">
            <div className="game-header__back" onClick={toggleMusic}>
              {music ? (
                <FaMusic style={{ height: "14px", width: "20px" }} />
              ) : (
                <MdOutlineMusicOff
                  style={{ height: "18px", width: "20px", opacity: "0.5" }}
                />
              )}
            </div>
          </div> */}

          <div className="game-header-button">
            <div className="game-header__back" onClick={handleSetting}>
              <IoMdSettings style={{ height: "20px", width: "20px" }} />
            </div>
            {settingModal && (
              <SettingModal
                info={info}
                setSettingModal={setSettingModal}
                handleRules={handleRules}
                handleSetting={handleSetting}
                handleLimits={handleLimits}
              // handleBetLimit={handleBetLimit}
              />
            )}
          </div>
        </div>
      </div>
      {openLimits && <Limits handleLimits={handleLimits} />}
      {openRules && <RulesModal handleRules={handleRules} />}
      {/* {openBetModal && (
        <BetLimitModal handleBetLimit={handleBetLimit} info={info} />
      )} */}
    </>
  );
};

export default Header;
