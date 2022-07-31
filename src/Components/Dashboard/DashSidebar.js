import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/logo/amazon_logo.png";
import DashProducts from "./DashProducts";
import DashMain from "./DashMain";
const DashSidebar = () => {
    return (
        <>
            <Nav className="col-md-12 d-none d-md-block sidebar">
                <Container>
                    <Navbar.Brand href="/" className="d-block py-4 text-center">
                        <img
                            src={Logo}
                            width="96"
                            height="35"
                            className="text-center"
                            alt="amazon logo"
                        />
                    </Navbar.Brand>
                </Container>
                <Nav.Item>
                    <Link
                        to="DashMain"
                        element={<DashMain />}
                        className="d-block text-white m-4"
                    >
                        Dashboard
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link
                        to="DashProducts"
                        element={<DashProducts />}
                        className="d-block text-white m-4"
                    >
                        Products
                    </Link>
                </Nav.Item>
            </Nav>
        </>
    );
};
export default DashSidebar;
