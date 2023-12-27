import React from "react";
import Button from "./Button";
import "./Card.css";

const Card = () => {
  return (
    <div className="lex-card">
      <div className="title">
        <img
          src="https://v1trading.lexer.markets/static/media/lex.edf582b8.svg"
          alt="logo"
        />
        <div className="name">
          <div>Lex</div>
          <div>$0.0050</div>
        </div>
      </div>
      <div className="content">
        <div className="row">
          <div className="label">Wallet</div>
          <div className="value">0.00 LEX ($0.00)</div>
        </div>
        <div className="row">
          <div className="label">Staked</div>
          <div className="value">0.00 LEX ($0.00)</div>
        </div>
        <hr />
        <div className="row">
          <div className="label">APR</div>
          <div className="value">59.26%</div>
        </div>
        <div className="row">
          <div className="label">Rewards</div>
          <div className="value">$0.00</div>
        </div>
        <div className="row">
          <div className="label">Multiplier Points APR</div>
          <div className="value">100.00%</div>
        </div>
        <div className="row">
          <div className="label">Boost Percentage</div>
          <div className="value">0.00%</div>
        </div>
        <div className="row total">
          <div className="label">Total Staked</div>
          <div className="value">13,338,405.23 LEX ($67,185.54)</div>
        </div>
        <Button title={"Buy LEX"} />
      </div>
    </div>
  );
};

export default Card;
