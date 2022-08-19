import React, { useEffect } from 'react';
import CheckoutSteps from '../Components/CheckoutSteps/CheckoutSteps';
import { Helmet } from 'react-helmet-async';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { useAddAddressMutation, useGetAdressQuery } from '../Redux/Api';
import ShippingForm from './ShippingForm';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';

const ShippingAdress = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [oneAdaress, setOneAdress] = useState();
  const navigate = useNavigate();
  console.log(oneAdaress);
  useEffect(() => {
    if (!loggedInUser) {
      navigate('/login');
    }
  }, [loggedInUser, navigate]);
  const handelSubmit = (e) => {
    e.preventDefault();
    addAdress({
      token: loggedInUser.token,
      body: oneAdaress,
    });
    navigate('/Payment');
  };
  const [addAdress] = useAddAddressMutation();
  const { data: adress } = useGetAdressQuery(loggedInUser.token);
  console.log(adress);
  return (
    <Container>
      <CheckoutSteps step1 step2 />
      <Container style={{ maxWidth: '800px' }}>
        <Row className="mt-4">
          <Link to={'/'}>
            <span>
              back to home {'  '}
              <RiArrowGoBackFill />
            </span>
          </Link>
        </Row>
        <Helmet>Shipping Address</Helmet>
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
                  checked
                  onClick={(e) => setOneAdress(e.target.value)}
                  // className="p-2 m-3 adress-Check form-check-input"
                />
                <label className="form-check-label" HtmlFor={adress.createdAt}>
                  {adress.fullAddress}
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
              className="btn btn-warning text-capitalize"
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
