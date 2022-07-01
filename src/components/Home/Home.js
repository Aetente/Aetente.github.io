import React from "react";
import "./styles.css";
import CssLines from "../CssLines/CssLines";
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import Menu from "../Menu/Menu";
import { openMenu, closeMenu } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const isOpenMenu = useSelector((state) => state.ui.isOpenMenu);

  const triggerMenu = () => {
    if (isOpenMenu) {
      document.body.style.overflow = "auto";
      dispatch(closeMenu());
    } else {
      document.body.style.overflow = "hidden";
      dispatch(openMenu());
    }
  };
  return (
    <div className="App">
      {isOpenMenu && <Menu triggerMenu={triggerMenu} />}
      <Header triggerMenu={triggerMenu} />
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
};

export default Home;
