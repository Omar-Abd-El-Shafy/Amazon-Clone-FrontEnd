import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSliceActions } from '../../Redux/userSlice.js';
import logo from '../../assets/amazon_logo.png';
import Search from './Search/Search';
import Cart from './Cart/Cart';
import LogInButton from './LoginButton/LoginButton';
import { Link } from 'react-router-dom';
import Sidebar from '../SideBar/SideBar';
import { MdAdminPanelSettings } from 'react-icons/md';

function Header() {
  const loggedInUser = useSelector((state) => state.user?.loggedInUser);
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="Header fixed-top d-flex align-items-center justify-content-between">
        <Sidebar />
        <Link to="/" style={{ cursor: 'pointer' }}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className=" header-search">
          <Search />
        </div>
        {loggedInUser?.user?.name ? (
          <>
            <Link to="/User">
              <span style={{ color: 'white', cursor: 'pointer' }}>
                {loggedInUser.user.name}
              </span>
            </Link>
            {/* <button
                            className="btn btn-outline-warning"
                            onClick={() => {
                                dispatch(userSliceActions.logout());
                            }}
                        >
                            logout
                        </button> */}
          </>
        ) : (
          <>
            <LogInButton />
          </>
        )}
        {loggedInUser?.user?.role === true ? (
          <Link to="/dashboard">
            <MdAdminPanelSettings className="text-white admin-icon" />
          </Link>
        ) : null}
        <Cart />
      </div>
    </div>
  );
}

export default Header;
