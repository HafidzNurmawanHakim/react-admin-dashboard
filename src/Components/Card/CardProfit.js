import React from "react";
import "./card.scss";
import { ChartActivity, Info, MoneyBag } from "../../SubComponents/AllSvg";

const CardProfit = (props) => {
  return (
    <div className="card card2">
      <div className="box">
        <MoneyBag />
        <h3>Total Profit</h3>
        <span>
          <p className="count">Rp 10.000.000</p>
        </span>

        <div className="activity">
          <ChartActivity className="charticon" />
          <h4>Meningkat 90% </h4>
        </div>
      </div>
      <button>
        <p>Detail</p> <Info />
      </button>
    </div>
  );
};

export default CardProfit;
