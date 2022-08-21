import React, { useEffect, useState } from "react";
import CheckoutSteps from "../Components/CheckoutSteps/CheckoutSteps";
import { Container, Form, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { savepayment } from "../Redux/paymentSlice";

const Payment = () => {
    const pay = useSelector((state) => state.payment.payment);
    const Shipping = useSelector((state) => state.shipping.userAdress);
    const [payment, setPayment] = useState(pay || " ");
    // console.log(pay);
    // console.log(Shipping);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(savepayment({ payment }));
        navigate("/PlaceOrder");
    };
    const loggedInUser = useSelector((state) => state.user.loggedInUser);
    useEffect(() => {
        if (!loggedInUser) {
            navigate("/login");
        }
    }, [loggedInUser, navigate]);
    // console.log(loggedInUser);
    return (
        <Container>
            <CheckoutSteps step1 step2 step3 />
            <Container style={{ maxWidth: "600px" }}>
                <Row className="mt-4">
                    <Link to={"/ShippingAdress"}>
                        <h6>
                            back to your Shipping Adress {"  "}
                            <RiArrowGoBackFill />
                        </h6>
                    </Link>
                    <hr />
                </Row>
                <h3>
                    {" "}
                    {loggedInUser.user.name}{" "}
                    <span className="fs-6 fw-normal text-black-50">
                        shipping to {Shipping.adress}
                    </span>
                </h3>

                <Helmet>
                    <title>Payment method</title>{" "}
                </Helmet>
                <h1 className="my-3">Payment method</h1>
                <Form onSubmit={handelSubmit}>
                    <div>
                        <Form.Check
                            type="radio"
                            id="visa"
                            label="visa"
                            value="visa"
                            checked={payment === "visa"}
                            onChange={(e) => setPayment(e.target.value)}
                        />
                    </div>
                    <div>
                        <Form.Check
                            type="radio"
                            id="cash"
                            label="cash"
                            value="cash"
                            checked={payment === "cash"}
                            onChange={(e) => setPayment(e.target.value)}
                        />
                    </div>
                    <div className=" mb-3 ">
                        <button
                            className="btn shadow bg-warning bg-gradient text-capitalize"
                            type="submit"
                        >
                            continue
                        </button>
                    </div>
                </Form>
            </Container>
        </Container>
    );
};

export default Payment;
