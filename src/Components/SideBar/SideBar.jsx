import React, { useState } from "react";
import SidebarList from "./SidebarList";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div onClick={handleShow} className="sideBar-offcanvas">
                <GiHamburgerMenu />
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header
                    closeButton
                    closeLabel="white"
                    className="sideBar-offcanvas-header"
                >
                    <Link to="/login">
                        <Offcanvas.Title className="sideBar-offcanvas-header-title">
                            Hello, Sign In
                        </Offcanvas.Title>
                    </Link>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SidebarList />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
export default Example;
