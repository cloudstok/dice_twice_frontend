import React from "react";
import { IoMdClose } from "react-icons/io";
import { BsFillRecord2Fill } from "react-icons/bs";


function Limits({ handleLimits, isClose }) {
  return (
    <div className="overlay-1">
      <div className="modal-new">
        <div className="close" onClick={handleLimits}>
          <IoMdClose style={{ fontSize: "18px", fontWeight: "bold" }} />
        </div>

        <div className="modal-head" style={{ paddingLeft: "0" }}>
          <div
            className="limit-head"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            <BsFillRecord2Fill className="icon" />
            <p>Limits</p>
          </div>
        </div>
        <hr className="hr" />

        <div className="modal-body" style={{ marginTop: "8px" }}>
          <div className="limit-block">
            <p className="value-para">Min Bet</p>
            <p className="value">50.00</p>
          </div>
          <div className="limit-block">
            <p className="value-para">Max Bet</p>
            <p className="value">20,000.00</p>
          </div>
          {/* <div className="limit-block">
            <p className="value-para">Max Profit</p>
            <p className="value">2,00,000.00</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Limits;
