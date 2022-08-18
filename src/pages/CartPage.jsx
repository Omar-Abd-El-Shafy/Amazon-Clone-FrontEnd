import React from "react";
import "../index.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
// import {
//   clearcart,
//   decreaseCartItem,
//   getTotal,
//   removeFromCart,
// } from '../Redux/cartSlice';
import { useEffect } from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";
import {
  useGetUserCartQuery,
  useRemoveFromCartMutation,
  useAddToCartMutation,
} from "../Redux/Api";
import Loading from "../Components/Loading/Loading";
const CartPage = () => {
  const navigate = useNavigate();
  // const userinfo = useSelector((state) => state.user.loggedInUser);
  // const token = userinfo.token;
  const loggedInUser = useSelector((state) => state.user?.loggedInUser);

  const dispatch = useDispatch();
  //accces to cart state
  // const cart = useSelector((state) => state.cart);
  useEffect(() => {
    // dispatch(getTotal());
  });

  //getcart from database
  const { data: cartData, isLoading } = useGetUserCartQuery(loggedInUser.token);

  console.log("cart data logiing ");
  console.log(cartData);
  console.log("cart products");
  //fanc
  const [removeProduct] = useRemoveFromCartMutation();
  const HandelRemove = (pro) => {
    removeProduct({
      token: loggedInUser.token,
      body: { product_id: pro.product_id._id },
    });
    // dispatch(removeFromCart(pro));
  };
  // price;
  const [addToCart] = useAddToCartMutation();
  const HandelDecrease = (pro) => {
    if (pro.quantity === 1) {
    } else {
      addToCart({
        token: loggedInUser.token,
        body: {
          product_id: pro.product_id._id,
          flag: 0,
        },
      });
    }

    // dispatch(decreaseCartItem(pro));
  };
  const Handelincrease = (pro) => {
    // dispatch(addToCart(pro));
    // note add to cart depends on flag if flag = 1 it will add, if flag = 0 it will subtract

    addToCart({
      token: loggedInUser.token,
      body: {
        product_id: pro.product_id._id,
        flag: 1,
      },
    });
  };
  // const Handelclear = () => {
  //   // dispatch(clearcart());
  // };
  const HandelCheckOut = () => {
    if (!loggedInUser) {
      navigate("/login");
    } else {
      navigate("/ShippingAdress");
    }
  };

  return (
    <Container>
      {" "}
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : cartData ? (
        <>
          {" "}
          <Row className="align-items-center">
            <>
              {cartData.length === 0 ? (
                <>
                  <Col>
                    <h1>
                      Cart is Empty <MdOutlineRemoveShoppingCart />
                    </h1>
                    <Button className="py-2 px-4 mt-4" variant="warning">
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
                </>
              ) : (
                <>
                  <Col md={8}>
                    {" "}
                    <ListGroup>
                      <h1>Shopping Cart</h1>
                      {cartData?.products.map((pro) => (
                        <ListGroup.Item key={pro.product_id._id}>
                          <Row className="align-item-center "></Row>
                          <Col md={4}>
                            <img
                              className="img-fluid rounded cart-img"
                              style={{ height: "70px" }}
                              src={pro.product_id.image_path[0]}
                              alt={pro.product_id.name}
                            />{" "}
                            <Link to={`/product/one/${pro.product_id._id}`}>
                              {pro.product_id.name}
                            </Link>
                          </Col>
                          <Col md={3}>
                            <Button
                              className="bg-warning bg-opacity-10  px-2 py-0  m-2"
                              variant="light"
                              onClick={() => HandelDecrease(pro)}
                            >
                              <AiOutlineMinus />
                            </Button>
                            <strong className=" rounded-2 py-1 px-2 bg-warning bg-opacity-10">
                              {pro.quantity}
                            </strong>
                            <Button
                              disabled={pro.product_id.stock === pro.quantity}
                              variant="light"
                              className="bg-warning bg-opacity-10  px-2 py-0  m-2"
                              onClick={() => Handelincrease(pro)}
                            >
                              <AiOutlinePlus />
                            </Button>
                          </Col>
                          <Col md={3} className="fw-bold fs-4">
                            {pro.quantity * pro.product_id.price} EGP
                          </Col>
                          <Col md={2} className="fw-bold fs-4">
                            <Button
                              className="bg-warning bg-opacity-10 rounded  border border-1 m-2"
                              variant="light"
                              onClick={() => HandelRemove(pro)}
                            >
                              <IoTrashOutline />
                            </Button>
                          </Col>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Col>

                  <Col md={4}>
                    {" "}
                    <Card>
                      <Card.Body>
                        <ListGroup variant="flush">
                          <ListGroup.Item>
                            <h3>
                              total Cart Price : {cartData?.bill} EGP
                              <Button
                                disabled={cartData?.products.length === 0}
                                className="d-block mt-2 ms-auto"
                                variant="danger"
                                // onClick={() => Handelclear(cart.cartItems)}
                              >
                                Clear
                              </Button>
                            </h3>
                          </ListGroup.Item>
                          <ListGroup.Item></ListGroup.Item>
                          <ListGroup.Item>
                            <div className="d-grid">
                              <Button
                                onClick={() => HandelCheckOut()}
                                disabled={cartData?.products.length === 0}
                                variant="warning"
                              >
                                Check out
                              </Button>
                            </div>
                          </ListGroup.Item>
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              )}
            </>
          </Row>
        </>
      ) : null}
    </Container>
  );
};

export default CartPage;
