import React, { useEffect, useState, useRef, useContext } from "react";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";
import ErrorModal from "./components/error/ErrorModal";
import NotEnoughBalance from "./components/error/NotEnoughBalance";
import { SoundContext } from "./context/SoundContext";
import RotateScreen from "./components/RotateScreen";
import HistoryData from "./components/HistoryData";
import BetMain from "./components/betContainer/BetMain";
import BetData from "./components/bet/BetData";

const Home = ({ shouldShowRotateImage }) => {


  const location = useLocation();
  const [socket, setSocket] = useState(null);
  const { sound } = useContext(SoundContext);
  const [info, setInfo] = useState({});
  const [showBalance, setShowBalance] = useState(false);
  const rawQuery = location.search.substring(1);

  const [error, setError] = useState("");
  const [errorModal, setErrorModal] = useState(false);


  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle loading state
  // if (loading || !socketConnected) {
  //   return <Loader message={"Connecting..."} />;
  // }

  // if (Object.keys(info)?.length === 0 && !loading) {
  //   return <UserNot />;
  // }

  return (
    <>
      {shouldShowRotateImage ? (
        <RotateScreen />
      ) : (
        <div className="game-container">
          <div className="main_inner">
            <Header
              info={info}
              // queryParams={queryParams}
              isModalOpen={isModalOpen}
            />
          </div>

          <HistoryData />
          <BetMain />
          <BetData />

        </div>
      )}
      {isModalOpen && (
        <>
          <div className="modal-overlay-closed"></div>
          <div className="modal-closed">
            <p>Bet Closed</p>
          </div>
        </>
      )}

      {showBalance && (
        <NotEnoughBalance
          setShowBalance={setShowBalance}
          showBalance={showBalance}
        />
      )}

      {errorModal && <ErrorModal error={error} setErrorModal={setErrorModal} />}
    </>
  );
};

export default Home;
