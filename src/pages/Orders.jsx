import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import Error from "../Components/Error/Error";
import Loading from "../Components/Loading/Loading";
import { useGetAllOrderQuery } from "../Redux/Api";
// import TbTruckLoading from 'react-icons/tb';
import { Link } from "react-router-dom";
const Orders = () => {
    const loggedInUser = useSelector((state) => state.user?.loggedInUser);

    const { data, isLoading, error } = useGetAllOrderQuery(loggedInUser.token);
    // console.log(data);
    return (
        <Container>
            <Helmet>
                <title>Orders</title>
            </Helmet>
            <h4>Your Orders</h4>
            {isLoading ? (
                <Loading />
            ) : error ? (
                <Error error={error.message} />
            ) : (
                <>
                    {data.map((item) => (
                        <Card className="m-2" key={item._id}>
                            <Row className="m-0  bg-secondary bg-opacity-10 order-top">
                                <Col
                                    md={8}
                                    className=" d-flex justify-content-between "
                                >
                                    <Card.Text>
                                        ORDER PLACED:{" "}
                                        <strong>{item.createdAt}</strong>
                                    </Card.Text>
                                    <Card.Text>
                                        Totle:<strong> {item.bill}EGP</strong>
                                    </Card.Text>
                                    <Card.Text>
                                        status:<strong>{item.status}</strong>
                                    </Card.Text>
                                </Col>
                                <Col md={3} className=" text-end">
                                    <Card.Text>
                                        deliveryAddress:
                                        <p className="fs-6">
                                            {item.deliveryAddress.city}
                                        </p>
                                    </Card.Text>
                                </Col>
                            </Row>

                            {/* <Row className="m-0 p-1">Delivered {item.deliveryDate}</Row> */}
                            {item.products.map((x) => (
                                <Row key={x.product_id} className="m-0 p-1">
                                    <Col md={1}>
                                        <Card.Img
                                            style={{ width: "50px" }}
                                            src={x.productBrief.image_path}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Card.Text>
                                            {x.productBrief.name}
                                        </Card.Text>
                                        <Card.Text>
                                            price: {x.productBrief.price}EGP
                                        </Card.Text>
                                        <Link
                                            to={`/product/one/${x.productBrief.product_id}`}
                                        >
                                            <Button
                                                variant="warning"
                                                className="shadow-sm  bg-gradient bg-opacity-10  px-2 py-1  m-2"
                                            >
                                                <span>
                                                    {/* <TbTruckLoading  className="text-dark"/> */}
                                                    Buy it again
                                                </span>
                                            </Button>
                                        </Link>
                                    </Col>
                                    <Col md={5} className=" mt-3">
                                        <Link
                                            to={`/product/one/${x.productBrief.product_id}`}
                                        >
                                            <Button
                                                variant="light"
                                                className="shadow  bg-gradient bg-opacity-10  px-2 py-1  m-2"
                                            >
                                                Write a product review
                                            </Button>
                                        </Link>
                                        <Link to={"/"}>
                                            <Button
                                                variant="light"
                                                className="shadow bg-gradient bg-opacity-10  px-2 py-1  m-2"
                                            >
                                                back to Home
                                            </Button>
                                        </Link>
                                        <Col className=" text-center mt-1">
                                            paymentMethod :{item.paymentMethod}
                                        </Col>
                                    </Col>
                                </Row>
                            ))}
                        </Card>
                    ))}
                </>
            )}
        </Container>
    );
};

export default Orders;
