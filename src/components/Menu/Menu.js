import React, { Component } from "react";
import "./styles.css";

const Menu = (props) => {
  const { triggerMenu } = props;
  return (
    <div className="menu">
      <div className="menu-list">
        <div>menu in development</div>
        <div>ABOUT</div>
        <div>CONTACT</div>
      </div>
    </div>
  );
};

export default Menu;
