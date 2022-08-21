import React from "react";
import {  Container, Nav,  } from "react-bootstrap";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import DashProducts from "./DashProducts";
import DepartmentsAdmin from "./DepartmentsAdmin";
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
                    <h3 className="DropdownHeader p-2">Departments</h3>
                    <Nav.Item>
                        <Link
                            to="DepartmentsAdmin"
                            element={<DepartmentsAdmin />}
                            className="d-block text-white m-4 navLink"
                        >
                            Departments
                        </Link>
                    </Nav.Item>
                </Container>
                <div className="logBTN btn btn-outline-light ms-5 mt-5">
                    <a
                        href="https://addons-sso.heroku.com/apps/amazon-clone-deploy/addons/papertrail"
                        className="d-block text-white"
                        target="_blank"
                        rel="noreferrer"
                    >
                        All-Logs
                    </a>
                </div>
            </Nav>
        </>
    );
};
export default DashSidebar;
