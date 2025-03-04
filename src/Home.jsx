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
import Loader from "./loader/Loader";
import { createSocket } from "./utility/newSocket";

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
  const [socketConnected, setSocketConnected] = useState(false);
  const decodedQuery = decodeURIComponent(rawQuery);
  const [loading, setLoading] = useState(true);


  let queryParams = {};
  try {
    queryParams = JSON.parse(
      '{"' + decodedQuery.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
      function (key, value) {
        return key === "" ? value : decodeURIComponent(value);
      }
    );
  } catch (e) {
    queryParams = {};
  }

  useEffect(() => {
    if (!queryParams.id) return;
    const socketInstance = createSocket(queryParams.id, queryParams.game_id);
    setSocket(socketInstance);

    const handleSocketConnect = () => setSocketConnected(true);
    const handleSocketDisconnect = () => setSocketConnected(false);

    const handleInfo = (data) => setInfo(data);

    socketInstance.on("connect", handleSocketConnect);
    socketInstance.on("disconnect", handleSocketDisconnect);
    socketInstance.on("info", handleInfo);
    // socketInstance.on("roll", handleColorEvent);
    // socketInstance.on("betError", handleBetError);
    // socketInstance.on("allBets", handleAllData);
    // socketInstance.on("color_data", handleColorData);
    // socketInstance.on("history_data", handleHistoryColor);
    // socketInstance.on("betSummary", handleCount);
    // socketInstance.on("betStats", handleGameStaus);
    // socketInstance.on("settlement", handleCashout);

    return () => {
      socketInstance.off("connect", handleSocketConnect);
      socketInstance.off("disconnect", handleSocketDisconnect);
      //   socketInstance.off("roll", handleColorEvent);
      //   socketInstance.off("betError", handleBetError);
      //   socketInstance.off("color_data", handleColorData);
      //   socketInstance.off("history_data", handleHistoryColor);
      //   socketInstance.disconnect();
      //   clearInterval(timerIntervalRef.current);
    }
  }, [queryParams.id, queryParams.game_id, error]);

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
              queryParams={queryParams}
              isModalOpen={isModalOpen}
            />
          </div>

          <HistoryData />
          <BetMain
            info={info}
            showBalance={showBalance}
          />
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
