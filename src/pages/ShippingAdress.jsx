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
import { useAddaddressMutation } from '../Redux/Api';

const ShippingAdress = () =>
{
  
  
  const Shipping = useSelector((state) => state.shipping.userAdress);
  const [fullName, setFullName] = useState(Shipping.fullName || ' ');
  const [phone, setPhone] = useState(Shipping.phone || ' ');
  const [street, setStreet] = useState(Shipping.phone || ' ');
  const [building, setBuilding] = useState(Shipping.phone || ' ');
  const [city, setCity] = useState(Shipping.city || ' ');
  const [state, setState] = useState(Shipping.city || ' ');
  const [ zipCode, setZipCode ] = useState( Shipping.city || ' ' );

  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  console.log(Shipping);
  
//   "building": 100,
//   "street": 9,
//   "city": "El-Mokkattam",
//   "state": "Cairo",
//   "zipCode": 11571,
//   "phone": 1012345678

// }
  console.log(loggedInUser);
  //func
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!loggedInUser) {
  //     navigate('/login');
  //   }
  // }, [loggedInUser, navigate]);
  const dispatch = useDispatch();

  const [Addaddress] = useAddaddressMutation();

  const handelSubmit = (e) => {
    e.preventDefault();
    Addaddress({
      token: loggedInUser.token,
      body: { building, street, city, state, zipCode, phone },
    })
    // dispatch(saveShipping({ fullName, adress, city, country, phone }));
    if (!loggedInUser) {
      navigate('/login');
    } else {
      navigate('/Payment');
    }
  };
  return (
    <Container>
      <CheckoutSteps step1 step2 />
      <Container style={{ maxWidth: '600px' }}>
        <Row className="mt-4">
          <Link to={'/'}>
            <h5>
              back to home {'  '}
              <RiArrowGoBackFill />
            </h5>
          </Link>
          <hr />
        </Row>
        <Helmet>Shipping Adress</Helmet>
        <h1 className="my-3">Shipping Adress</h1>
        <Form onSubmit={handelSubmit}>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>full Name</Form.Label>
            <Form.Control disabled
              // placeholder={ Shipping.fullName }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              // placeholder={Shipping.phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="adress">
            <Form.Label>street</Form.Label>
            <Form.Control
              // placeholder={Shipping.adress}
              onChange={(e) => setStreet(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="adress">
            <Form.Label>building</Form.Label>
            <Form.Control
              // placeholder={Shipping.adress}
              onChange={(e) => setBuilding(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="City">
            <Form.Label>City</Form.Label>
            <Form.Control
              // placeholder={Shipping.city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>state</Form.Label>
            <Form.Control
              // placeholder={Shipping.country}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>zipCode</Form.Label>
            <Form.Control
              // placeholder={Shipping.country}
              onChange={(e) => setZipCode(e.target.value)}
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
