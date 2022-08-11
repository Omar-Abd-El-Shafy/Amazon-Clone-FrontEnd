import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSliceActions } from "../../Redux/userSlice.js";
import logo from "../../assets/amazon_logo.png";
import Search from "./Search/Search";
import Cart from "./Cart/Cart";
import LogInButton from "./LoginButton/LoginButton";
import { Link } from "react-router-dom";
import Sidebar from "../SideBar/SideBar";

function Header() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="Header fixed-top d-flex align-items-center justify-content-between">
        <Sidebar />
        <Link to="/" style={{ cursor: "pointer" }}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <Search />
        {loggedInUser?.user.name ? (
          <>
            <span style={{ color: "white" }}>{loggedInUser.user.name}</span>
            <input
              type="button"
              onClick={() => {
                dispatch(userSliceActions.logout());
              }}
              value="logout"
            />
          </>
        ) : (
          <>
            <LogInButton />
          </>
        )}

        <Cart />
      </div>
    </div>
  );
}

export default Header;
