import React from "react";
import "./lexStake.css";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import HeaderBav from "../Dashboard/HeaderBav";

function Lexstake() {
  return (
    <div className="lexstake_page">
      <HeaderBav />
      <div className="stake">
        <div className="banner1">
          <p>
            Stake{" "}
            <a href="https://docs.lexer.markets/token-and-economics/tokenomics">
              LEX
            </a>{" "}
            and{" "}
            <a href="https://docs.lexer.markets/token-and-economics/tokenomics#escrowed-lex">
              esLEX
            </a>{" "}
            to earn rewards from variant LP pools.
          </p>
        </div>
        <Card />
        <Card2 />
        <Card3 title={"LEX Vault"} value={""} />
        <Card3 title={"CORECRYPTO Vault"} value={"CORECRYPTO"} />
        <Card3 title={"ARBI Vault"} value={"ARBI"} />
      </div>
    </div>
  );
}

export default Lexstake;
