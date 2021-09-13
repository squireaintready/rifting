import "./styles.css";

// RANDOM NUMBER GENERATOR
import { v4 as uuid } from "uuid";

const BalancesTab = ({ currentBalance, networksData }) => {
  return (
    <div className="balancesTab__container">
      <div className="balancesTab__leftSide">
        <span className="balancesTab__title">Current Balance</span>
        <h5 className="balancesTab__balance">{`$${currentBalance?.toLocaleString(
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
