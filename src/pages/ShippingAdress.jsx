import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import CheckoutSteps from '../Components/CheckoutSteps/CheckoutSteps';
import { Helmet } from 'react-helmet-async';
import { Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { saveShipping } from '../Redux/shippingSlice';
import { RiArrowGoBackFill } from 'react-icons/ri';

const ShippingAdress = () => {
  const Shipping = useSelector((state) => state.shipping.userAdress);
  const [fullName, setFullName] = useState(Shipping.fullName || ' ');
  const [adress, setAdress] = useState(Shipping.adress || ' ');
  const [city, setCity] = useState(Shipping.city || ' ');
  const [country, setCountry] = useState(Shipping.country || ' ');
  const [phone, setPhone] = useState(Shipping.phone || ' ');
  const userinfo = useSelector((state) => state.user.loggedInUser);
  console.log(Shipping);
  
  //func
  const navigate = useNavigate();
  useEffect(() => {
    if (!userinfo) {
      navigate('/login');
    }
  }, [userinfo, navigate]);
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ fullName, adress, city, country, phone }));
    if (!userinfo) {
      navigate('/login');
    } else {
      navigate('/Payment');
    }
  };
  return (
    <Container>

      <CheckoutSteps step1 step2 />
    <Container style={{ maxWidth: '600px' }}>
      <Row className='mt-4'>
        <Link to={'/'}>
          <h5>
            back to home  {'  '}
            <RiArrowGoBackFill />
          </h5>
        </Link>
        <hr />
      </Row>
      <Helmet>Shipping Adress</Helmet>
      <h1 className="my-3">Shipping Adress</h1>
      <Form>
        <Form.Group
          onSubmit={handelSubmit}
          className="mb-3"
          controlId="fullName"
        >
          <Form.Label>full Name</Form.Label>
          <Form.Control
            placeholder={Shipping.fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="adress">
          <Form.Label>adress</Form.Label>
          <Form.Control
            placeholder={Shipping.adress}
            onChange={(e) => setAdress(e.target.value)}
            required
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            placeholder={Shipping.phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="City">
          <Form.Label>City</Form.Label>
          <Form.Control
            placeholder={Shipping.city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="country">
          <Form.Label>country</Form.Label>
          <Form.Control
            placeholder={Shipping.country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </Form.Group>
      </Form>
      <div className=" mb-3 ">
        {/* <Link to={'/Payment'}> */}
        <button
          onClick={handelSubmit}
          className="btn btn-warning text-capitalize"
          type="submit"
        >
          continue
        </button>
        {/* </Link> */}
      </div>
    </Container>
          </Container>
  );
};

export default ShippingAdress;
