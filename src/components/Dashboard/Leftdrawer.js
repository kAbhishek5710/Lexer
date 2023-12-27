import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import "./leftdrawer.css";
import { NavLink } from "react-router-dom";

function Leftdrawer({ logclose }) {
  return (
    <div className="leftDrawer">
      <div className="leftnav">
        <img
          src="https://app.lexer.markets/assets/logo_LEXER-80aa9bef.svg"
          alt=""
        ></img>
      </div>
      <div className="nav_btn" onClick={() => logclose()}>
        <List style={{ marginTop: "-10px" }}>
          <ListItem className="item">
            <NavLink to="/dashboard">
              <ListItemText className="text">Dashboard</ListItemText>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/stake">
              <ListItemText className="text">Migrate V1 Assets</ListItemText>
            </NavLink>
          </ListItem>
          <ListItem>
            <ListItemText className="text">LextStake</ListItemText>
          </ListItem>
          <ListItem>
            <NavLink to="/Liquidity">
              <ListItemText className="text">Liquidity</ListItemText>
            </NavLink>
          </ListItem>
          <ListItem>
            <ListItemText className="text">Trade</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText className="text">Leaderboard</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText className="text">V2 Launch</ListItemText>
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default Leftdrawer;
