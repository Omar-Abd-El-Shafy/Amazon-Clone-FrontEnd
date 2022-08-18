import React, { useEffect, useState } from 'react';
import CheckoutSteps from '../Components/CheckoutSteps/CheckoutSteps';
import { Container, Col, Row, Card, ListGroup } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { number } from 'yup';
import { Button } from 'bootstrap';

const PlaceOrder = () => {
  const pay = useSelector((state) => state.payment.payment);
  const Shipping = useSelector((state) => state.shipping.userAdress);
  const cart = useSelector((state) => state.cart);

  console.log(cart);
  // console.log(pay);
  const navigate = useNavigate();

  const userinfo = useSelector((state) => state.user.loggedInUser);
  useEffect(() => {
    if (!userinfo) {
      navigate('/login');
    }
  }, [userinfo, navigate]);
  const round2 = (num) => Math.round(num * 100 + number.EPSILION) / 100;
  const ShippingFee = 21;
  const cash= 9
  const total = cart.totalCartPrice + cash + ShippingFee;
  return (
    <Container>
      <CheckoutSteps step1 step2 step3 step4 />
      <Container>
        <Helmet>place Order</Helmet>
        {/* <Row className="mt-4">
          <Link to={'/Payment'}>
            <h6>
              Change your selected payment{'  '}
              <RiArrowGoBackFill />
            </h6>
          </Link>
          <hr />
        </Row>
        <h3>
          {' '}
          {Shipping.fullName}{' '}
          <span className="fs-6 fw-normal text-black-50">{pay}</span>
        </h3> */}
        <h1 className="my-3">Place Order</h1>
        <Row>
          <Col md={8}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Text>
                  <strong>Shipping address </strong>{' '}
                  <Link to={'/ShippingAdress'} className="fs-6 text-primary ">
                    Change
                  </Link>
                </Card.Text>
                <Card.Text>
                  <strong>Name: {Shipping.fullName} </strong>
                  <br />
                  <strong>
                    Adress: {Shipping.adress} <br />
                    {Shipping.city}
                    <br />
                    {Shipping.country}
                    <br />
                    {Shipping.phone}
                  </strong>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-3">
              <Card.Body>
                <Card.Text>
                  <strong>Payment method </strong>{' '}
                  <Link to={'/Payment'} className="fs-6 text-primary ">
                    Change
                  </Link>
                </Card.Text>
                <Card.Text>{pay}</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-3">
              <Row className="align-items-center g-2 p-3">
                {' '}
                <Card.Title>items</Card.Title>
                {cart.cartItems.map((item) => (
                  <>
                    <Col md={4} xs={3}>
                      <img
                        src={item.image_path[0]}
                        alt={item.name}
                        className="img-thumbnail rounded-start  border-0"
                      />
                    </Col>
                    <Col md={8}>
                      {' '}
                      <Card.Body>
                        <Card.Text>
                          <Link to={`/product/one/${item._id}`}>
                            {item.name}
                          </Link>
                        </Card.Text>
                        <Card.Text>Quantity: {item.cartQuantity}</Card.Text>
                        <Card.Text>
                          <strong className="text-danger">
                            Price: {item.price} EGP
                          </strong>
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </>
                ))}
                <Link to={'/CartPage'}></Link>
              </Row>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Order Summary</Card.Title>
                <ListGroup>
                  <ListGroup.Item>
                    <Row>
                      <Col>items</Col>
                      <Col>{cart.totalcartQuantitye}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping & handling</Col>
                      <Col>{ShippingFee.toFixed(2)}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    {' '}
                    <Row>
                      <Col> Cash on Delivery Fee</Col>
                      <Col>9 EGP</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {' '}
                    <Row className=" text-danger fw-bold">
                      <Col> Order total:</Col>
                      <Col>{total} EGP</Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
                <div className="d-gred">
                  <button className="bg-warning w-100 border-0 rounded-2 mt-4 py-1 px-2 ">
                    Place Order
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default PlaceOrder;
