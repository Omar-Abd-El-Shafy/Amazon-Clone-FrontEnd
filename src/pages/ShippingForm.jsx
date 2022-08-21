import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { saveShipping } from "../Redux/shippingSlice";
import { Container, Form } from "react-bootstrap";
// import CheckoutSteps from "../Components/CheckoutSteps/CheckoutSteps";

const ShippingForm = () => {
    const Shipping = useSelector((state) => state.shipping.userAdress);
    const [phone, setPhone] = useState(Shipping.phone || "");
    const [street, setStreet] = useState(Shipping.street || "");
    const [building, setBuilding] = useState(Shipping.building || "");
    const [city, setCity] = useState(Shipping.city || "");
    const [state, setState] = useState(Shipping.state || "");
    const [zipCode, setZipCode] = useState(Shipping.zipCode || "");
    const [country, setCountry] = useState(Shipping.country || "");
    const loggedInUser = useSelector((state) => state.user.loggedInUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handelSubmit = (e) => {
        e.preventDefault();
        if (loggedInUser) {
            dispatch(
                saveShipping({
                    building,
                    street,
                    city,
                    state,
                    zipCode,
                    phone,
                    country,
                })
            );
            navigate("/Payment");
        } else {
            navigate("/login");
        }
    };
    return (
        <Container>
            <Container style={{ maxWidth: "800px" }}>
                <h1 className="my-3">Add Shipping Address</h1>
                <Form onSubmit={handelSubmit}>
                    <Form.Group className="mb-3" controlId="fullName">
                        <Form.Label>full Name</Form.Label>
                        <Form.Control
                            placeholder={loggedInUser.user.name}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control
                            placeholder={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="street">
                        <Form.Label>street</Form.Label>
                        <Form.Control
                            placeholder={street}
                            onChange={(e) => setStreet(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="building">
                        <Form.Label>building</Form.Label>

                        <Form.Control
                            placeholder={building}
                            onChange={(e) => setBuilding(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="country">
                        <Form.Label>country</Form.Label>
                        <Form.Control
                            placeholder={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="City">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            placeholder={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="state">
                        <Form.Label>state</Form.Label>
                        <Form.Control
                            placeholder={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="zipCode">
                        <Form.Label>zipCode</Form.Label>
                        <Form.Control
                            placeholder={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            required
                        />
                    </Form.Group>
                </Form>
                <div className=" mb-3 ">
                    <button
                        onClick={handelSubmit}
                        className="btn shadow bg-warning bg-gradient text-capitalize"
                        type="submit"
                    >
                        continue
                    </button>
                </div>{" "}
            </Container>
        </Container>
    );
};

export default ShippingForm;
