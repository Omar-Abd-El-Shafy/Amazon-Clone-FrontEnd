import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/amazon_logo.png';
import Search from './Search/Search';
import Cart from './Cart/Cart';
import LogInButton from './LoginButton/LoginButton';
import { Link } from 'react-router-dom';
import Sidebar from '../SideBar/SideBar';
import { MdAdminPanelSettings } from 'react-icons/md';
import { IoPerson } from 'react-icons/io5';

function Header() {
    const loggedInUser = useSelector( ( state ) => state.user?.loggedInUser );
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
            {loggedInUser?.user?.role === true ? (
              <>
                <Link to="/EditProfile">
                  <h3
                    style={{
                      color: 'white',
                      cursor: 'pointer',
                      textTransform: 'capitalize',
                      marginTop: '10px',
                      textAlign: 'center',
                    }}
                  >
                    <IoPerson className="text-warning fs-5 mb-1 me-1" />
                    {loggedInUser.user.name}
                  </h3>
                </Link>
              </>
            ) : (
              <>
                <Link to="/User">
                  <h3
                    style={{
                      color: 'white',
                      cursor: 'pointer',
                      textTransform: 'capitalize',
                      marginTop: '10px',
                      textAlign: 'center',
                    }}
                  >
                    <IoPerson className="text-warning fs-5 mb-1 me-1" />
                    {loggedInUser.user.name}
                  </h3>
                </Link>
              </>
            )}
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
        ) : (
          <Cart />
        )}
        {/* {loggedInUser?.user?.role === true ? <></> : <></>} */}
      </div>
    </div>
  );
}

export default Header;
