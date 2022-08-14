import React from 'react';
import CheckoutSteps from '../Components/CheckoutSteps/CheckoutSteps';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const placeOrder = () => {
  return (
    <Container style={{ maxWidth: '600px' }}>
      <CheckoutSteps step1 step2 step3 step4 />
      <Helmet>place Order</Helmet>
      <h1 className="my-3">Place Order</h1>
    </Container>
  );
};

export default placeOrder;
