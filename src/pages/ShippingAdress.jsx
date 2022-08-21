import React, { useEffect } from "react";
import CheckoutSteps from "../Components/CheckoutSteps/CheckoutSteps";
import { Helmet } from "react-helmet-async";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useGetAdressQuery } from "../Redux/Api";
import ShippingForm from "./ShippingForm";
import { AiOutlinePlus } from "react-icons/ai";
import { saveShipping } from "../Redux/shippingSlice";

const ShippingAdress = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const Shipping = useSelector((state) => state.shipping.userAdress);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [loggedInUser, navigate]);

  const { data: addressess } = useGetAdressQuery(loggedInUser.token);
  
  const handelSubmit = (e) => {
    e.preventDefault();

    if (!Shipping.country) {
      dispatch(
        saveShipping({
          ...addressess[0],
        })
      );
    }

    navigate("/Payment");
  };

  const setAddressData = (address) => {
    dispatch(
      saveShipping({
        ...address,
      })
    );
  };

  return (
    <Container>
      <CheckoutSteps step1 step2 />
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>

      <Container style={{ maxWidth: "800px" }}>
        <Row className="mt-4">
          <Link to={"/"}>
            <span>
              back to home {"  "}
              <RiArrowGoBackFill />
            </span>
          </Link>
        </Row>
        {addressess?.length ? (
          <Form className=" border border-1 rounded-3 p-2 mb-3">
            <h5 className="">choose Shipping addresses</h5>
            {addressess.map((adress) => (
              <div
                key={adress.createdAt}
                className="form-check adress-Check mb-2"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id={adress.createdAt}
                  value={adress._id}
                  onClick={() => setAddressData(adress)}
                  // className="p-2 m-3 adress-Check form-check-input"
                />
                <label className="form-check-label" htmlFor={adress.createdAt}>
                  {adress.fullAddress}
                </label>
                <Link to="/ShippingForm" onClick={() => setAddressData(adress)}>
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
                Add New Adderss
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
            {" "}
            <ShippingForm />
          </>
        )}
      </Container>
    </Container>
  );
};

export default ShippingAdress;
