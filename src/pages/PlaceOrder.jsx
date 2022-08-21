import React, { useEffect } from 'react';
import CheckoutSteps from '../Components/CheckoutSteps/CheckoutSteps';
import { Container, Col, Row, Card, ListGroup } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  useAddAddressMutation,
  useEmptyCartMutation,
  useGetUserCartQuery,
} from '../Redux/Api';
import axios from 'axios';
import OrderSummery from '../Components/orders/OrderSummery';

const PlaceOrder = () => {
  const paymentMethod = useSelector((state) => state.payment.payment);
  const Shipping = useSelector((state) => state.shipping.userAdress);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const { data: cartData } = useGetUserCartQuery(loggedInUser.token);
  const [emptyCart] = useEmptyCartMutation();
  // console.log(cartData);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedInUser) {
      navigate('/login');
    }
  }, [loggedInUser, navigate]);

  const [addAddress] = useAddAddressMutation();

  const handelSubmit = () => {
    if (loggedInUser) {
      addAddress({
        token: loggedInUser.token,
        body: { ...Shipping },
      });
      axios
        .post(
          'https://amazon-clone-deploy.herokuapp.com/order',
          {
            deliveryAddress: Shipping,
            paymentMethod,
          },
          {
            headers: {
              'x-access-token': `${loggedInUser.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);

          if (paymentMethod === 'visa') {
            // console.log('navigate to stripe payment page');
            navigate('/Stripe', { state: { order_id: response.data[0]._id } });
          } else {
            emptyCart({ token: loggedInUser.token });
            navigate('/Success');
          }
        })
        .catch((error) => {
          navigate('/OrderError', { state: { products: error.response.data } });

          // console.log(
          //   'navigate to out-of-stock error products page to remove them from cart'
          // );
          // //   the out-of-stock products array
          // console.log(error.response.data);
        });
    } else {
      navigate('/login');
    }
  };
  // const round2 = (num) => Math.round(num * 100 + number.EPSILION) / 100;
  let ShippingFee = 21;
  let cash = 9;
  // const cash = 9;
  // const total = cart.totalCartPrice + cash + ShippingFee;
  return (
    <Container>
      <CheckoutSteps step1 step2 step3 step4 />
      <Container>
        <Helmet>
          <title>place Order</title>
        </Helmet>
        {/* <h1 className="my-3">Place Order</h1> */}
        <Row className="my-3">
          <Col md={8}>
            <OrderSummery Shipping={Shipping} />

            {/* <Card className="mb-3">
              <Row className="align-items-center g-2 p-3">
                {" "}
                <Card.Title>items</Card.Title>
                {cartData.products.map((item) => (
                  <>
                    <Col md={4} xs={3}>
                      <img
                        src={item.product_id.image_path[0]}
                        alt={item.product_id.name}
                        className="w-50 rounded-start  border-0"
                      />
                    </Col>
                    <Col md={8}>
                      {" "}
                      <Card.Body>
                        <Card.Text>
                          <Link to={`/product/one/${item.product_id._id}`}>
                            {item.product_id.name}
                          </Link>
                        </Card.Text>
                        <Card.Text>Quantity: {item.quantity}</Card.Text>
                        <Card.Text>
                          <strong className="text-danger">
                            Price: {item.product_id.price} EGP
                          </strong>
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </>
                ))}
                <Link to={"/CartPage"}></Link>
              </Row>
            </Card> */}
          </Col>
          <Col md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Text>
                  <strong>Payment method </strong>{' '}
                  <Link to={'/Payment'} className="fs-6 text-primary ">
                    Change
                  </Link>
                </Card.Text>
                <Card.Text>{paymentMethod}</Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Order Summary</Card.Title>
                <ListGroup>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        Checkout for: ({cartData.products.length}) items
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row
                      className={
                        paymentMethod === 'visa'
                          ? 'checkoutvisa'
                          : ''
                      }
                    >
                      <Col>Shipping & handling</Col>
                      <Col>{ShippingFee}EGP</Col>
                    </Row>
                    <Row
                      className={
                        paymentMethod === 'visa'
                          ? 'checkoutvisa'
                          : ''
                      }
                    >
                      <Col> Cash on Delivery Fee</Col>
                      <Col>{cash} EGP</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {' '}
                    <Row className=" text-danger fw-bold">
                      <Col> Order total:</Col>
                      <Col>{cartData.bill} EGP</Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
                <div className="d-gred">
                  <button
                    className="shadow bg-warning bg-gradient w-100 border-0 rounded-2 mt-4 py-1 px-2 "
                    onClick={handelSubmit}
                  >
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
