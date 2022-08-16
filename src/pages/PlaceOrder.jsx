import React, { useEffect, useState } from 'react';
import CheckoutSteps from '../Components/CheckoutSteps/CheckoutSteps';
import { Container, Form, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';

const PlaceOrder = () => {
  const pay = useSelector((state) => state.payment.payment);
  const Shipping = useSelector((state) => state.shipping.userAdress);
  console.log(pay);
  const navigate = useNavigate();

  const userinfo = useSelector((state) => state.user.loggedInUser);
  useEffect(() => {
    if (!userinfo) {
      navigate('/login');
    }
  }, [userinfo, navigate]);

  return (
    <Container style={{ maxWidth: '600px' }}>
      <CheckoutSteps step1 step2 step3 step4 />
      <Helmet>place Order</Helmet>
      <Row className="mt-4">
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
      </h3>
      <h1 className="my-3">Place Order</h1>
    </Container>
  );
};

export default PlaceOrder;
