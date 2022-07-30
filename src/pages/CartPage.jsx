import React from 'react';
import '../index.css';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addToCart,
  clearcart,
  decreaseCartItem,
  getTotal,
  removeFromCart,
} from '../Redux/cartSlice';
import { useEffect } from 'react';

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
    <div>
      <Helmet>
        <title>Shoping Cart</title>
      </Helmet>
      {/* <span>back to shoping</span> */}
      <Row className="">
        <Col md={8} className="">
          {cart.cartItems.length === 0 ? (
            <Col>
              <h1>Cart is Empty</h1>
              <Button className=" py-2 px-4" variant="warning">
                <Link style={{ fontSize: '1.5rem', fontweight: '500' }} to="/">
                  Go shopping
                </Link>
              </Button>
            </Col>
          ) : (
            <ListGroup>
              <h1>Shoping Cart</h1>
              {cart.cartItems?.map((pro) => (
                <ListGroup.Item key={pro.id}>
                  <Row className="align-item-center ">
                    <Col md={4}>
                      <img
                        className="img-fluid rounded cart-img"
                        style={{ height: '80px' }}
                        src={pro.image}
                        alt={pro.title}
                      />{' '}
                      <Link to={`/product/${pro.id}`}>{pro.title}</Link>
                    </Col>

                    <Col md={3}>
                      <Button
                        variant="light"
                        onClick={() => HandelDecrease(pro)}
                      >
                        <i className="fas fa-minus-circle "></i>
                      </Button>{' '}
                      <strong>{pro.cartQuantity}</strong>{' '}
                      <Button
                        disabled={pro.rating.count === pro.cartQuantity}
                        variant="light"
                        onClick={() => Handelincrease(pro)}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </Button>
                    </Col>
                    <Col md={3} className="fw-bold fs-4">
                      ${pro.cartQuantity * pro.price}
                    </Col>
                    <Col md={2} className="fw-bold fs-4">
                      <Button variant="light" onClick={() => HandelRemove(pro)}>
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
                    total Cart Price : {cart.totalCartPrice}${' '}
                    <Button
                      disabled={cart.cartItems.length === 0}
                      variant="danger"
                      onClick={() => Handelclear(cart.cartItems)}
                    >
                      Clear
                    </Button>
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item></ListGroup.Item>
                <ListGroup.Item>
                  <Link to={'/Checkout'}>
                    <div className="d-grid">
                      <Button
                        disabled={cart.cartItems.length === 0}
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
    </div>
  );
};

export default CartPage;

// {cart.products.map((product) => (
//             <h1>{product.title}</h1>
//           ))}
