import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { GrAmazon } from "react-icons/gr";
import { Card, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetUserCartQuery } from "../../Redux/Api";

const OrderSummery = () => {
    const loggedInUser = useSelector((state) => state.user.loggedInUser);
    const Shipping = useSelector((state) => state.shipping.userAdress);

    const { data: cart } = useGetUserCartQuery(loggedInUser.token);
    // console.log(Shipping);
    //console.log(cart);
    return (
        <Container>
            <Row>
                <Link to="/CartPage">
                    <span className="text-muted">
                        <BiArrowBack />
                        <GrAmazon className="mx-1 " />
                        back to cart
                    </span>
                </Link>
            </Row>
            <Row>
                <Card variant="flush" className="border border-0 mb-3">
                    <Card.Body>
                        <Card.Text>
                            <span>Shipping address </span>{" "}
                            <Link
                                to={"/ShippingAdress"}
                                className="fs-6 text-primary "
                            >
                                Change
                            </Link>
                        </Card.Text>
                        <Card.Text>
                            <strong>Name: {loggedInUser.user.name} </strong>
                            <br />
                            <strong>
                                Address:
                                {Shipping.building}, {Shipping.street},{" "}
                                {Shipping.city}, {Shipping.state},{" "}
                                {Shipping.country}, {Shipping.zipCode}
                            </strong>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <p></p>
                <Card variant="flush" className="border border-0 mb-3">
                    <Card.Text>
                        <h4>Review items and shipping</h4>{" "}
                    </Card.Text>
                    <Card.Text>
                        <h4>Totle:{cart.bill} EGP</h4>{" "}
                    </Card.Text>
                    {cart.products.map((item) => (
                        <>
                            <ListGroup variant="flush" key={item._id}>
                                <ListGroup.Item className=" d-flex justify-content-between align-items-center border border-0">
                                    <img
                                        style={{ width: "42px" }}
                                        src={item.product_id.image_path[0]}
                                        alt={item.product_id.name}
                                    />
                                    <span style={{ width: "78px" }}>
                                        {" "}
                                        {item.product_id.brand}
                                    </span>
                                    <span style={{ width: "78px" }}>
                                        quantity: {item.quantity}
                                    </span>
                                    <span style={{ width: "78px" }}>
                                        price: {item.product_id.price}EGP
                                    </span>
                                </ListGroup.Item>
                                <ListGroup.Item></ListGroup.Item>
                            </ListGroup>
                        </>
                    ))}
                </Card>
            </Row>
            <Row></Row>
        </Container>
    );
};

export default OrderSummery;
