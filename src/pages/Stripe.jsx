import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "./Stripe.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import OrderSummery from "../Components/orders/OrderSummery";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51LTllPFwhSEkFDCITyyEeRWRWzutCNUpPLOVIjIxHxN9uExzSruNMu1Add2JKRRAf9OyQdcca00EQd70ccm35VBf00D0RNjgkw"
);

export default function Stripe() {
  const [clientSecret, setClientSecret] = useState("");

  const location = useLocation();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [loggedInUser, navigate]);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(
      "https://amazon-clone-deploy.herokuapp.com/payment/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${loggedInUser.token}`,
        },
        body: JSON.stringify({ order_id: location.state.order_id }),
      }
    )
      .then((res) => res.json({}))
      .then((data) => setClientSecret(data.clientSecret));
  }, [loggedInUser, location.state.order_id]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <Container className=" Checkout-Stripe">
            <Row>
              <Col className="OrderDetails" md={6}>
                <OrderSummery />
              </Col>
              <Col md={6}>
                <CheckoutForm />
              </Col>
            </Row>
          </Container>
        </Elements>
      )}
    </div>
  );
}
