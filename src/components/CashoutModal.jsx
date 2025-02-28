import React from "react";

const CashoutModal = ({ cashoutModal, cashout }) => {
  return (
    <div>
      {cashoutModal && (
        <div className={`win-modal`}>
          <div className="win-modal-body">
            <div className="bg-win">
              <button className="btn-win">
                <p className="win-amt">
                  You Won
                  <span>{cashout?.mywinningAmount}</span>
                </p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CashoutModal;
