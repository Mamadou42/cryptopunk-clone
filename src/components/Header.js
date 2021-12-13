import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themSwithIcon from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo__container">
        <img src={punkLogo} className="punk__logo" alt="" />
      </div>

      <div className="search__bar">
        <div className="search__icon">
          <img src={searchIcon} alt="" />
        </div>
        <input
          type="text"
          className="search__input"
          placeholder="Collection, item or user ..."
        />
      </div>

      <div className="header__items">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="header__action">
        <div className="theme_swith_container">
          <img src={themSwithIcon} alt="" />
        </div>
      </div>

      <div className="login__button">GET IN</div>
    </div>
  );
};

export default Header;
