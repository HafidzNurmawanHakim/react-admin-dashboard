import React from "react";
import "./card.scss";
import styled from "styled-components";
import { ChartActivity, Info, Transaction } from "../../SubComponents/AllSvg";

const Div = styled.div``;
const Box = styled.div``;
const Chart = styled.div``;
const Card = (props) => {
  return (
    <div className="card">
      <div className="box">
        <Transaction />
        <h3>Total Transaksi</h3>
        <span>
          <p className="count">Rp 99.000.000</p>
          <p>300 Transaksi</p>
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

export default Card;
