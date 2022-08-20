import React, { useEffect } from 'react';
import CheckoutSteps from '../Components/CheckoutSteps/CheckoutSteps';
import { Helmet } from 'react-helmet-async';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { useAddAddressMutation, useGetAdressQuery } from '../Redux/Api';
import ShippingForm from './ShippingForm';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import { saveShipping } from '../Redux/shippingSlice';

const ShippingAdress = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [oneAdaress, setOneAdress] = useState();
  const [phone, setPhone] = useState(' ');
  const [street, setStreet] = useState(' ');
  const [building, setBuilding] = useState(' ');
  const [city, setCity] = useState(' ');
  const [state, setState] = useState(' ');
  const [zipCode, setZipCode] = useState(' ');
  const [country, setCountry] = useState(' ');
  const navigate = useNavigate();
  console.log(oneAdaress);
  useEffect(() => {
    if (!loggedInUser) {
      navigate('/login');
    }
  }, [ loggedInUser, navigate ] );
  const dispatch = useDispatch();
  const Shipping = useSelector((state) => state.shipping.userAdress);
  
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(
      saveShipping({ building, street, city, state, zipCode, phone, country })
    );
    navigate('/Payment');
  };
  const [addAdress] = useAddAddressMutation();
  const { data: adress } = useGetAdressQuery(loggedInUser.token);
  console.log(adress);
  console.log();
  return (
    <Container>
      <CheckoutSteps step1 step2 />
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>

      <Container style={{ maxWidth: '800px' }}>
        <Row className="mt-4">
          <Link to={'/'}>
            <span>
              back to home {'  '}
              <RiArrowGoBackFill />
            </span>
          </Link>
        </Row>
        {adress ? (
          <Form className=" border border-1 rounded-3 p-2 mb-3">
            <h5 className="">choose Shipping addresses</h5>
            {adress.map((adress) => (
              <div
                key={adress.createdAt}
                className="form-check adress-Check mb-2"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id={adress.createdAt}
                  value={adress.fullAddress}
                  onClick={(e) => setOneAdress(e.target.value)}
                  // className="p-2 m-3 adress-Check form-check-input"
                />
                <label className="form-check-label" htmlFor={adress.createdAt}>
                  building: {adress.building}
                </label>
                <label className="form-check-label" htmlFor={adress.createdAt}>
                  street: {adress.street}
                </label>
                <label className="form-check-label" htmlFor={adress.createdAt}>
                  city:{adress.city}
                </label>
                <label className="form-check-label" htmlFor={adress.createdAt}>
                  state: {adress.state}
                </label>
                <label className="form-check-label" htmlFor={adress.createdAt}>
                  zipCode:{adress.zipCode}
                </label>
                <label className="form-check-label" htmlFor={adress.createdAt}>
                  country:{adress.country}
                </label>
                <label className="form-check-label" htmlFor={adress.createdAt}>
                  phone:{adress.phone}
                </label>
                <Link to="/ShippingForm">
                  <Button
                    variant="light"
                    className=" text-primary ms-1 p-0 mb-2 p-1 rounded-3"
                  >
                    Edit
                  </Button>
                </Link>
              </div>
            ))}
            <Link className=" d-block text-muted" to="/ShippingForm">
              <Button variant="light" className="text-muted m-0">
                <AiOutlinePlus />
                Add New Aderss
              </Button>
            </Link>
            <button
              onClick={handelSubmit}
              className="btn shadow bg-warning bg-gradient text-capitalize"
              type="submit"
            >
              continue
            </button>
          </Form>
        ) : (
          <>
            {' '}
            <ShippingForm />
          </>
        )}
      </Container>
    </Container>
  );
};

export default ShippingAdress;
