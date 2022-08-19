import React from "react";
import { Col, Row } from "react-bootstrap";
import { BiUserCheck, BiCartAlt, BiWallet, BiWinkSmile } from "react-icons/bi";

const CheckoutSteps = (props) => {
    return (
        <Row className="CheckoutSteps">
            <Col className={props.step1 ? "active" : ""}>
                <BiUserCheck />
                Sign in
            </Col>
            <Col className={props.step2 ? "active" : ""}>
                <BiCartAlt />
                Shipping
            </Col>
            <Col className={props.step3 ? "active" : ""}>
                <BiWallet />
                Payment
            </Col>
            <Col className={props.step4 ? "active" : ""}>
                <BiWinkSmile />
                Place order
            </Col>
        </Row>
    );
};

export default CheckoutSteps;
