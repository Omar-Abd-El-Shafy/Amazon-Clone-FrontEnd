import React from "react";
import "./Header.css";
import logo from "../../assets/amazon_logo.png";
import Search from "./Search/Search";
import Cart from "./Cart/Cart";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="">
            <div className="Header d-flex align-items-center justify-content-between">
                <Link to="/" style={{ cursor: "pointer" }}>
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <Search />
                <Cart />
            </div>
        </div>
    );
}

export default Header;
