import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import DashSidebar from "../Components/Dashboard/DashSidebar";
import { Col, Row } from "react-bootstrap";

const Users = (props) => {
    useEffect(() => {
      props.funcFoot(false);
      return () => {
        props.funcFoot(true);
      };
    }, [props]);

    return (
        <div className="container-fluid">
            <div className="row flex no-wrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    <Row>
                        <Col xs={2} id="sidebar-wrapper">
                            <DashSidebar />
                        </Col>
                    </Row>
                </div>
                <div className="col py-3">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Users;
