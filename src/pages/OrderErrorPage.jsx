import React from "react";
import "../index.css";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { IoTrashOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { useRemoveFromCartMutation } from "../Redux/Api";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useState } from "react";

const OrderErrorPage = () => {
  const loggedInUser = useSelector((state) => state.user?.loggedInUser);
  const location = useLocation();
  const [products, setProducts] = useState(location.state?.products || []);

  //function to remove item from cart
  const [removeProduct] = useRemoveFromCartMutation();
  const HandelRemove = (pro) => {
    removeProduct({
      token: loggedInUser.token,
      body: { product_id: pro.product_id._id },
    });

    setProducts(
      products.filter((item) => item.product_id._id !== pro.product_id._id)
    );

    toast.error(`  ${pro.product_id.name} removed from cart`, {});
  };

  return (
    <Container>
      {" "}
      <Helmet>
        <title>Out-of-Stock Products</title>
      </Helmet>
      {
        <>
          {" "}
          <Row className="align-items-center ">
            <>
              {products.length === 0 ? (
                <>
                  <Col>
                    <h1>
                      Out-of-stock Products Removed{" "}
                      <MdOutlineRemoveShoppingCart />
                    </h1>
                    <Button className="py-2 px-4 mt-4" variant="warning">
                      <Link
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "500",
                        }}
                        to="/CartPage"
                      >
                        Go to Cart
                      </Link>
                    </Button>
                  </Col>
                </>
              ) : (
                <>
                  <Col md={8}>
                    {" "}
                    <ListGroup>
                      <h1>Out-of-Stock Products</h1>
                      {products.map((pro) => (
                        <ListGroup.Item key={pro.product_id._id}>
                          <Row className="align-item-center ">
                            <Col md={4}>
                              <img
                                className="img-fluid rounded cart-img"
                                style={{
                                  height: "70px",
                                  objectFit: "contain",
                                }}
                                src={pro.product_id.image_path[0]}
                                alt={pro.product_id.name}
                              />{" "}
                              <Link to={`/product/one/${pro.product_id._id}`}>
                                {pro.product_id.name}
                              </Link>
                            </Col>

                            <Col md={2} className="fw-bold fs-4">
                              <Button
                                className="shadow  bg-gradient bg-opacity-10 rounded  border border-1 m-2"
                                variant="light"
                                onClick={() => HandelRemove(pro)}
                              >
                                <IoTrashOutline />
                              </Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Col>
                </>
              )}
            </>
          </Row>
        </>
      }
    </Container>
  );
};

export default OrderErrorPage;
