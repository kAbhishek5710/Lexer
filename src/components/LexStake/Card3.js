import React from "react";
import "./Card.css";

function Card3({ title, value }) {
  return (
    <div className="lex-card">
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="content">
        <div className="row">
          <div className="label">Staked Tokens</div>
          <div className="value">0.00 {value}</div>
        </div>
        <div className="row">
          <div className="label">Reserved for Vesting</div>
          <div className="value">0.00 / 0.00</div>
        </div>
        <div className="row">
          <div className="label">Vesting Status</div>
          <div className="value">0.0000 / 0.0000</div>
        </div>
        <div className="row">
          <div className="label">Claimable</div>
          <div className="value">0.0000 LEX</div>
        </div>
        <div class="App-card-buttons button-row">
          <button class="button grow semi-clear">Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}

export default Card3;
