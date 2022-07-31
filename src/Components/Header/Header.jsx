import React from "react";
import "./Header.css";
import logo from "../../assets/amazon_logo.png";
import Search from "./Search/Search";
import Cart from "./Cart/Cart";
import { Link } from "react-router-dom";
import LogInButton from "./LoginButton/LoginButton";

function Header() {
    return (
      <div className="">
        <div className="Header fixed-top d-flex align-items-center justify-content-between">
          <Link to="/" style={{ cursor: 'pointer' }}>
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <Search />
          <LogInButton />
          <Cart />
        </div>
      </div>
    );
}

export default Header;
