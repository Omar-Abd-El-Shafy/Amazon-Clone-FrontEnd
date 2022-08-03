import React from "react";
import { useSelector } from "react-redux";

import "./Header.css";
import logo from "../../assets/amazon_logo.png";
import Search from "./Search/Search";
import Cart from "./Cart/Cart";
import { Link } from "react-router-dom";
import LogInButton from "./LoginButton/LoginButton";

function Header() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  return (
    <div className="">
      <div className="Header fixed-top d-flex align-items-center justify-content-between">
        <Link to="/" style={{ cursor: "pointer" }}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <Search />
        {loggedInUser?.userName ? (
          <span style={{ color: "white" }}>{loggedInUser.userName}</span>
        ) : (
          <LogInButton />
        )}

        <Cart />
      </div>
    </div>
  );
}

export default Header;
