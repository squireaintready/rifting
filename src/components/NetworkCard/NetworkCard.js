import React, { useState } from "react";
import "./styles.css";

// Material UI Components
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const NetworkCard = ({ data, handleDeposit, handleWithdraw }) => {
  const [input, setInput] = useState("");
  const [projectedReturns, setProjectedReturns] = useState("");

  const handleChange = (e) => {
    if (e.target.value >= 0) {
      setInput(e.target.value);
      let projReturns = (e.target.value * (data.interestRate / 100)).toFixed(2);
      setProjectedReturns(projReturns);
    } else {
      alert("Transactions require numeric values. Please try again.");
    }
  };

  const withdraw = (e) => {
    handleWithdraw(e.target.ariaLabel, input);
    setInput("");
  };

  const deposit = (e) => {
    handleDeposit(e.target.ariaLabel, input);
    setInput("");
  };

  const name = data.name;

  return (
    <div className="card">
      <div className="networkCard__container">
        <div className="networkCard__header">
          <img className="networkCard__img" src={data.imgUrl} alt="" />
          <h5 className="networkCard__headerTitle">{data.name}</h5>
        </div>
        <h5 className="networkCard__interestRate">{`${data.interestRate}%`}</h5>
        <div className="networkCard__info">
          <p className="networkCard__infoText">{`Current Balance: ${data.USDC.toLocaleString(
            "en-US"
          )}`}</p>
          <p className="networkCard__infoText">{`Interest Accrued: ${data.accruedInterest}`}</p>
        </div>

        <div>
          <form className="networkCard__form">
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={withdraw}
            >
              <p aria-label={name} className="networkCard__btnText">
                Withdraw
              </p>
            </Button>
            <TextField
              label="Amount in $"
              variant="outlined"
              className="networkCard__input"
              value={input}
              onChange={handleChange}
            />
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={deposit}
            >
              <p aria-label={name} className="networkCard__btnText">
                Deposit
              </p>
            </Button>
          </form>
          {projectedReturns > 0 ? (
            <p className="networkCard__projectedReturns">{`Projected Returns : $${projectedReturns.toLocaleString(
              "en-US"
            )}`}</p>
          ) : (
            <p className="networkCard__projectedReturns">
              Projected Returns : --
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NetworkCard;