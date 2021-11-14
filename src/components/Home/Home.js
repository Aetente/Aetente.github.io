import React, { Component } from "react";
import "./styles.css";
import CssLines from "../CssLines/CssLines";
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import Menu from "../Menu/Menu";
import { connect } from "react-redux";
import { openMenu, closeMenu } from "../../actions";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
    this.triggerMenu = this.triggerMenu.bind(this);
  }

  triggerMenu = () => {
    let bodyOverflow = document.body.style.overflow;
    if (this.props.isOpenMenu) {
      document.body.style.overflow = "auto";
      this.props.closeMenu();
    } else {
      document.body.style.overflow = "hidden";
      this.props.openMenu();
    }
  };

  render() {
    let { isOpenMenu } = this.props;
    return (
      <div className="App">
        {isOpenMenu && <Menu triggerMenu={this.triggerMenu} />}
        <Header triggerMenu={this.triggerMenu} />
        <div className="main">
          <div className="two-part-block">
            <div>
              <header className="main-wrap">
                <div className="stage">Yehoshua Kopyrin</div>
                <div>Hello, my name is</div>
                <div>Yehoshua. I am a</div>
                <div>Fullstack developer.</div>
              </header>
            </div>
            <div>
              <CssLines />
            </div>
          </div>
          <Portfolio />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isOpenMenu: state.ui.isOpenMenu,
  };
};

export default connect(mapStateToProps, {
  openMenu,
  closeMenu,
})(Home);
