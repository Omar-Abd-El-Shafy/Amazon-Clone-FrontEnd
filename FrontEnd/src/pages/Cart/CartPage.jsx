import React, { Component } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <Helmet>
        <title>Shoping Cart</title>
      </Helmet>
      <h1>Shoping Cart</h1>
      <Row>
        <Col md={8}>
          {cart.length === 0 ? (
            <h1>
              {' '}
              Cart is Empty.<Link to="/">Go shopping</Link>
            </h1>
          ) : (
            <ListGroup>
              {cart.products.map((pro) => (
                <ListGroup.Item key={pro.id}>
                  <Row className="align-item-center">
                    <Col md={4}>
                      <img
                        className="img-fluid rounded "
                        style={{ height: '80px',maxWidth:'100%' }}
                        src={pro.image}
                        alt={pro.title}
                      />
                    </Col>
                    <Col md={5}>
                      <Link to={ `/products/${ pro.id }` }>{ pro.title }</Link>
                    </Col>
                    <Col className='fw-bold fs-4'><p>${ pro.price }</p></Col>
                    
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
};

export default CartPage;

// {cart.products.map((product) => (
//             <h1>{product.title}</h1>
//           ))}
