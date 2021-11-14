import React, { Component } from "react";
import "./styles.css";

class Menu extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let { triggerMenu } = this.props;
    return (
      <div className="menu">
        <div className="close-menu" onClick={triggerMenu}>
          close menu
        </div>
        <div className="menu-list">
          <div>menu in development</div>
          <div>ABOUT</div>
          <div>CONTACT</div>
        </div>
      </div>
    );
  }
}

export default Menu;
