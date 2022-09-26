import React, { useState } from 'react';
import { userSliceActions } from '../../Redux/userSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import SidebarList from './SidebarList';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdPerson } from 'react-icons/io';

function Sidebar() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} className="sideBar-offcanvas fs-4">
        <GiHamburgerMenu />
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header
          closeButton
          closeLabel="white"
          className="sideBar-offcanvas-header"
        >
          {loggedInUser?.user?.name ? (
            <>
              {loggedInUser?.user?.role === true ? (
                <Link to="/EditProfile" onClick={handleClose}>
                  <h2
                    style={{
                      color: 'white',
                      cursor: 'pointer',
                    }}
                  >
                    {loggedInUser.user.name}
                  </h2>
                </Link>
              ) : (
                <Link to="/user" onClick={handleClose}>
                  <h2
                    style={{
                      color: 'white',
                      cursor: 'pointer',
                    }}
                  >
                    {loggedInUser.user.name}
                  </h2>
                </Link>
              )}

              <button
                className="btn btn-outline-dark text-capitalize"
                onClick={() => {
                  dispatch(userSliceActions.logout());
                  handleClose();
                }}
              >
                logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Offcanvas.Title className="sideBar-offcanvas-header-title">
                  <IoMdPerson className="fs-2 mb-1 p-1 border border-2 rounded-circle text-white" />{' '}
                  Hello, Sign In
                </Offcanvas.Title>
              </Link>
            </>
          )}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SidebarList />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Sidebar;
