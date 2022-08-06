import React from "react";
import "../index.css";
import { useDispatch } from "react-redux";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    addToCart,
    clearcart,
    decreaseCartItem,
    getTotal,
    removeFromCart,
} from "../Redux/cartSlice";
import { useEffect } from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

const CartPage = () => {
    const dispatch = useDispatch();
    //accces to cart state
    const cart = useSelector((state) => state.cart);
    console.log(cart);
    //get totoal
    useEffect(() => {
        dispatch(getTotal());
    }, [cart, dispatch]);
    //fanc
    const HandelRemove = (pro) => {
        dispatch(removeFromCart(pro));
    };
    const HandelDecrease = (pro) => {
        dispatch(decreaseCartItem(pro));
    };
    const Handelincrease = (pro) => {
        dispatch(addToCart(pro));
    };
    const Handelclear = () => {
        dispatch(clearcart());
    };

    return (
        <Container>
            <Helmet>
                <title>Shopping Cart</title>
            </Helmet>
            {/* <span>back to shopping</span> */}
            <Row className="align-items-center;">
                <Col md={8} className="">
                    {cart.cartItems.length === 0 ? (
                        <Col>
                            <h1>
                                Cart is Empty <MdOutlineRemoveShoppingCart />
                            </h1>
                            <Button
                                className="py-2 px-4 mt-4"
                                variant="warning"
                            >
                                <Link
                                    style={{
                                        fontSize: "1.5rem",
                                        fontweight: "500",
                                    }}
                                    to="/"
                                >
                                    Go shopping
                                </Link>
                            </Button>
                        </Col>
                    ) : (
                        <ListGroup>
                            <h1>Shopping Cart</h1>
                            {cart.cartItems?.map((pro) => (
                                <ListGroup.Item key={pro.id}>
                                    <Row className="align-item-center ">
                                        <Col md={4}>
                                            <img
                                                className="img-fluid rounded cart-img"
                                                style={{ height: "70px" }}
                                                src={pro.image}
                                                alt={pro.title}
                                            />{" "}
                                            <Link to={`/product/${pro.id}`}>
                                                {pro.title}
                                            </Link>
                                        </Col>
                                        <Col md={3}>
                                            <Button
                                                className="bg-warning bg-opacity-10"
                                                variant="light"
                                                onClick={() =>
                                                    HandelDecrease(pro)
                                                }
                                            >
                                                <i className="fas fa-minus "></i>
                                            </Button>{" "}
                                            <strong className="border border-1 rounded-2 py-1 px-2 bg-warning bg-opacity-10">
                                                {pro.cartQuantity}
                                            </strong>{" "}
                                            <Button
                                                disabled={
                                                    pro.rating.count ===
                                                    pro.cartQuantity
                                                }
                                                variant="light"
                                                className="bg-warning bg-opacity-10"
                                                onClick={() =>
                                                    Handelincrease(pro)
                                                }
                                            >
                                                <i className="fas fa-plus"></i>
                                            </Button>
                                        </Col>
                                        <Col md={3} className="fw-bold fs-4">
                                            ${pro.cartQuantity * pro.price}
                                        </Col>
                                        <Col md={2} className="fw-bold fs-4">
                                            <Button
                                                className="bg-warning bg-opacity-10"
                                                variant="light"
                                                onClick={() =>
                                                    HandelRemove(pro)
                                                }
                                            >
                                                <i className="fas fa-trash"></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h3>
                                        total Cart Price : {cart.totalCartPrice}
                                        $
                                        <Button
                                            disabled={
                                                cart.cartItems.length === 0
                                            }
                                            className="d-block mt-2 ms-auto"
                                            variant="danger"
                                            onClick={() =>
                                                Handelclear(cart.cartItems)
                                            }
                                        >
                                            Clear
                                        </Button>
                                    </h3>
                                </ListGroup.Item>
                                <ListGroup.Item></ListGroup.Item>
                                <ListGroup.Item>
                                    <Link to={"/Checkout"}>
                                        <div className="d-grid">
                                            <Button
                                                disabled={
                                                    cart.cartItems.length === 0
                                                }
                                                variant="warning"
                                            >
                                                Check out
                                            </Button>
                                        </div>
                                    </Link>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CartPage;