import React, { useState, useEffect } from "react";
import "./styles.css";

// RANDOM NUMBER GENERATOR
import { v4 as uuid } from "uuid";

const BalancesTab = ({ currentBalance, networksData }) => {
  const [totalAccountValue, setTotalAccountValue] = useState(0);

  useEffect(() => {
    let temp = 0;
    networksData?.forEach((data) => (temp += parseFloat(data.USDC)));
    setTotalAccountValue(temp + parseFloat(currentBalance));
  }, [networksData, currentBalance]);

  const leftTile = (title, balance) => (
    <div className="balancesTab__leftSide">
      <span className="balancesTab__title">{title}</span>
      <h5 className="balancesTab__balance">{`$${balance?.toLocaleString(
        "en-US"
      )} ${title}`}</h5>
    </div>
  );
  
  return (
    <div className="balancesTab__container">
      {leftTile("USDC", currentBalance)}
      <div className="balancesTab__leftSide balancesTab__toggleOffWhenSmall">
        <span className="balancesTab__title">Total Account Value</span>
        <h5 className="balancesTab__balance">{`$${totalAccountValue?.toLocaleString(
          "en-US"
        )}`}</h5>
      </div>

      <div className="balancesTab__rightSide">
        <span className="balancesTab__title">Current Holdings</span>
        <div className="balancesTab__rightItems">
          {networksData.map((data) => (
            <div key={uuid()} className="balancesTab__rightItem">
              <p className="balancesTab__name">{data.name}</p>
              <p className="balancesTab__USDC">{`$${data.USDC.toLocaleString(
                "en-US"
              )}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BalancesTab;
