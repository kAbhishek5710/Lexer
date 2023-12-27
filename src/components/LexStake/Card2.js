import React from "react";
import "./Card.css";
import Button from "./Button";

const Card2 = () => {
  return (
    <div className="lex-card">
      <div className="title">
        <img
          src="https://v1trading.lexer.markets/static/media/lex.edf582b8.svg"
          alt="logo"
        />
        <div className="name">
          <div>esLex</div>
          <div>$0.0050</div>
        </div>
      </div>
      <div className="content">
        <div className="row">
          <div className="label">Wallet</div>
          <div className="value">0.00 esLEX ($0.00)</div>
        </div>
        <div className="row">
          <div className="label">Staked</div>
          <div className="value">0.00 esLEX ($0.00)</div>
        </div>
        <hr />
        <div className="row">
          <div className="label">APR</div>
          <div className="value">59.25%</div>
        </div>
        <div className="row">
          <div className="label">Multiplier Points APR</div>
          <div className="value">100.00%</div>
        </div>
        <div className="row total">
          <div className="label">Total Staked</div>
          <div className="value">2,563,231 esLEX ($12,910)</div>
          <div className="label">Total Supply</div>
          <div className="value">7,222,051 esLEX ($36,377)</div>
        </div>
        <Button title={"Connect Wallet"} />
      </div>
    </div>
  );
};

export default Card2;
