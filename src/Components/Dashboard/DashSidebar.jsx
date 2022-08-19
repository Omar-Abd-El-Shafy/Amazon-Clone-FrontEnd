import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/logo/amazon_logo.png";
import Categories from "./Categories";
import DashProducts from "./DashProducts";
import Users from "./Users";
const DashSidebar = () => {
    return (
        <>
            <Nav className="col-md-12 d-none d-md-block sidebar ">
                <Container className="mt-5">
                    <h3 className="DropdownHeader p-2">Products</h3>
                    <Nav.Item>
                        <Link
                            to="DashProducts"
                            element={<DashProducts />}
                            className="d-block text-white m-4 navLink"
                        >
                            Products
                        </Link>
                    </Nav.Item>
                    <h3 className="DropdownHeader p-2">Users</h3>
                    <Nav.Item>
                        <Link
                            to="Users"
                            element={<Users />}
                            className="d-block text-white m-4 navLink"
                        >
                            Users
                        </Link>
                    </Nav.Item>
                    <h3 className="DropdownHeader p-2">Categories</h3>
                    <Nav.Item>
                        <Link
                            to="Categories"
                            element={<Categories />}
                            className="d-block text-white m-4 navLink"
                        >
                            Categories
                        </Link>
                    </Nav.Item>
                </Container>
            </Nav>
        </>
    );
};
export default DashSidebar;
