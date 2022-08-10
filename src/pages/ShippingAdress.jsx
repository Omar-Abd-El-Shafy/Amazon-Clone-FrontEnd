import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import CheckoutSteps from '../Components/CheckoutSteps/CheckoutSteps';
import { Helmet } from 'react-helmet-async';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShippingAdress = () =>
{
  const [fullName, setFullName] = useState('');
  const [adress, setAdress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [Phone, setPhone] = useState('');
  const navigate = useNavigate();
  //func
  const handelSubmit = (e) => {
    e.preventDefault();
    navigate('/placeOrder');
  };

  return (
    <Container style={{ maxWidth: '600px' }}>
      <CheckoutSteps step1 step2 />
      <Helmet>Shipping Adress</Helmet>
      <h1 className="my-3">Shipping Adress</h1>
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="fullName">
          <Form.Label>full Name</Form.Label>
          <Form.Control
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="adress">
          <Form.Label>adress</Form.Label>
          <Form.Control
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Phone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="City">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="country">
          <Form.Label>country</Form.Label>
          <Form.Control
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </Form.Group>
      </Form>
      <div className=" mb-3 ">
        <Link to={'/Payment'}>
          <button className="btn btn-warning text-capitalize" type="submit">
            continue
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default ShippingAdress;
