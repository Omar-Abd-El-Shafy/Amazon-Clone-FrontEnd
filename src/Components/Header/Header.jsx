import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSliceActions } from "../../Redux/userSlice.js";
import logo from "../../assets/amazon_logo.png";
import Search from "./Search/Search";
import Cart from "./Cart/Cart";
import LogInButton from "./LoginButton/LoginButton";
import { Link } from "react-router-dom";
import Sidebar from "../SideBar/SideBar";
import { MdAdminPanelSettings } from "react-icons/md";

function Header() {
    const loggedInUser = useSelector((state) => state.user.loggedInUser);
    const dispatch = useDispatch();

<<<<<<< HEAD
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
=======
    return (
        <div className="">
            <div className="Header fixed-top d-flex align-items-center justify-content-between">
                <Sidebar />
                <Link to="/" style={{ cursor: "pointer" }}>
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <Search />
                {loggedInUser?.userName ? (
                    <>
                        <Link to="/profile">
                            <span style={{ color: "white", cursor: "pointer" }}>
                                {loggedInUser.userName}
                            </span>
                        </Link>
                        <button
                            className="btn btn-outline-warning"
                            onClick={() => {
                                dispatch(userSliceActions.logout());
                            }}
                        >
                            logout
                        </button>
                    </>
                ) : (
                    <>
                        <LogInButton />
                    </>
                )}
                <Link to="/dashboard">
                    <MdAdminPanelSettings className="text-white admin-icon" />
                </Link>
                <Cart />
            </div>
        </div>
    );
>>>>>>> 4f0a016dac97c381a21e8703fcf4cd1363d71ae1
}

export default Header;
