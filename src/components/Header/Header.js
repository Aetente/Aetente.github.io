import React, { Component } from "react";
import { useSelector } from "react-redux";
import "./styles.css";

const Header = (props) => {
  const { triggerMenu } = props;
  const isOpenMenu = useSelector((state) => state.ui.isOpenMenu);
  
  return (
    <div className="header">
      <div className="header-main">
        <div className="header-block">(in development)</div>
        <a
          className="header-block"
          href="https://www.instagram.com/maththesun/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fill="#9f9fa9"
              d="M12 0c2.056 0 4 1.944 4 4h0v8c0 2.056-1.944 4-4 4h0-8c-2.056 0-4-1.944-4-4h0V4c0-2.056 1.944-4 4-4h0zm0 2H4c-.935 0-2 1.065-2 2h0v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2h0V4c0-.935-1.065-2-2-2h0zM8 4c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm0 2c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm4.145-3.068a.96.96 0 1 1 0 1.92.96.96 0 1 1 0-1.92z"
            ></path>
          </svg>
          instagram
        </a>
      </div>
      <div onClick={triggerMenu} className={`header-hamburger ${isOpenMenu ? "show-menu" : ""}`}>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
