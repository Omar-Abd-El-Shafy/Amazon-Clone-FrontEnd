import React, { useEffect, useState } from 'react';
import CheckoutSteps from '../Components/CheckoutSteps/CheckoutSteps';
import { Container, Form, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';

const Payment = () => {
  const [ payment, setPayment ] = useState( '' );
  const Shipping = useSelector((state) => state.shipping.userAdress);
  console.log(Shipping);
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    navigate('/placeOrder');
  };
  const userinfo = useSelector((state) => state.user.loggedInUser);
  useEffect(() => {
    if (!userinfo) {
      navigate('/login');
    }
  }, [userinfo, navigate]);
  return (
    <Container style={{ maxWidth: '600px' }}>
      <CheckoutSteps step1 step2 step3 />
      <Row className="mt-4">
        <Link to={'/ShippingAdress'}>
          <h6>
            back to your account {'  '}
            <RiArrowGoBackFill />
          </h6>
        </Link>
        <hr />
      </Row>
      <h3>
        {' '}
        {Shipping.fullName}{' '}
        <span className="fs-6 fw-normal text-black-50">
          shipping to {Shipping.adress}
        </span>
      </h3>

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
