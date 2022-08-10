import React, { useState } from 'react';
import CheckoutSteps from '../Components/CheckoutSteps/CheckoutSteps';
import { Container, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router';

const Payment = () => {
  const [payment, setPayment] = useState('');
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    navigate('/placeOrder');
  };
  return (
    <Container style={{ maxWidth: '600px' }}>
      <CheckoutSteps step1 step2 step3 />
      <Helmet>Paymet meathod </Helmet>
      <h1 className="my-3">Paymet meathod</h1>
      <Form onSubmit={handelSubmit}>
        <div>
          <Form.Check
            type="radio"
            id="Visa"
            label="Visa"
            value="Visa"
            checked={payment === 'Visa'}
            onChange={(e) => setPayment(e.target.value)}
          />
        </div>
        <div>
          <Form.Check
            type="radio"
            id="cash"
            label="cash"
            value="cash"
            checked={payment === 'cash'}
            onChange={(e) => setPayment(e.target.value)}
          />
        </div>
        <div className=" mb-3 ">
          <button className="btn btn-warning text-capitalize" type="submit">
            continue
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default Payment;
