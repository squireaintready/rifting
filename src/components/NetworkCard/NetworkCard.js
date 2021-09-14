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
    if(parseFloat(input) > 0){
      handleWithdraw(e.target.ariaLabel, input);
    }else{
      alert('Please enter a number greater than 0')
    }
    setInput("");
  };

  const deposit = (e) => {
    if(parseFloat(input) > 0){
      handleDeposit(e.target.ariaLabel, input);
    }else{
      alert('Please enter a number greater than 0')
    }
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
          <p className="networkCard__infoText">{`${
            data.name
          } holdings: $${data.USDC.toLocaleString("en-US")}`}</p>
          <p className="networkCard__infoText">{`Interest accrued: $${data.accruedInterest}`}</p>
        </div>

        <div>
          <div className="networkCard__form">
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={withdraw}
            >
              <p aria-label={name} className="networkCard__btnText">
                SELL
              </p>
            </Button>
            <TextField
              label="$"
              variant="outlined"
              className="networkCard__input"
              value={input}
              onChange={handleChange}
              inputProps={{ style: { textAlign: "center" } }}
            />
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={deposit}
            >
              <p aria-label={name} className="networkCard__btnText">
                BUY
              </p>
            </Button>
          </div>
          {projectedReturns > 0 ? (
            <p className="networkCard__projectedReturns">{`projected returns : $${projectedReturns.toLocaleString(
              "en-US"
            )}`}</p>
          ) : (
            <p className="networkCard__projectedReturns">
              projected returns : --
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NetworkCard;
