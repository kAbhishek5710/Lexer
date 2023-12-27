import React from "react";
import "./Button.css";

const Button = ({title}) => {
  return (
    <div>
      <div class="App-card-buttons button-row">
        <button class="button grow semi-clear">{title}</button>
      </div>
    </div>
  );
};

export default Button;
