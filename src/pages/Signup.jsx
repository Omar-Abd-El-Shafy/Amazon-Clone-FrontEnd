import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/userSlice";
import logoMain from "../assets/imgs/logo/Amazon-logo-main.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

export default function Registration(props) {
    const loggedInUser = useSelector((state) => state.user.loggedInUser);

    const apierror = useSelector((state) => state.user.error);

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: "",
    });
    const [errors, setErrors] = useState({
        nameError: "",
        emailError: "",
        phoneError: "",
        passwordError: "",
        confirmPasswordError: "",
    });
    const [valid, setValid] = useState(false);
    const navigate = useNavigate();
    const [isRevealedPassword, setIsRevealedPassword] = useState(false);
    const handleValidation = (field, value) => {
        // console.log(field, value);

        if (field === "name") {
            setErrors({
                ...errors,
                nameError:
                    value.length === 0
                        ? "This field is required"
                        : !/^[a-z ,.'-]+$/i.test(value)
                        ? "Not valid name"
                        : null,
            });
        } else if (field === "email") {
            setErrors({
                ...errors,
                emailError:
                    value.length === 0
                        ? "This field is required"
                        : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                              value
                          )
                        ? "Not valid email"
                        : null,
            });
        } else if (field === "phone") {
            setErrors({
                ...errors,
                phoneError:
                    value.length === 0
                        ? "This field is required"
                        : !/^(012|010|011)[0-9]{8}$/.test(value)
                        ? "Not valid phone"
                        : null,
            });
        } else if (field === "password") {
            setErrors({
                ...errors,
                passwordError:
                    value.length === 0
                        ? "This field is required"
                        : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                              value
                          )
                        ? "Not valid password"
                        : null,
            });
        } else if (field === "confirm_password") {
            setErrors({
                ...errors,
                confirmPasswordError:
                    value.length === 0
                        ? "This field is required"
                        : value !== userData.password
                        ? "No matching"
                        : null,
            });
        }
    };

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.id]: e.target.value,
        });

        handleValidation(e.target.id, e.target.value);
    };

    const dispatch = useDispatch();

    function checkProperties(obj) {
        for (var key in obj) {
            if (obj[key] !== null && obj[key] !== "") return false;
        }
        return true;
    }
    useEffect(() => {
        props.funcNav(false);
        setValid(checkProperties(errors));
        if (loggedInUser && !apierror) {
            navigate(`/login`);
        }
    }, [apierror, errors, loggedInUser, navigate, props]);

    const registeer = (e) => {
        e.preventDefault();
        if (valid) {
            dispatch(register({ ...userData }));
        } else {
            console.log(valid);
        }
    };

    return (
        <Container style={{ maxWidth: "600px" }}>
            <Row className="mb-3 text-center ">
                <Link to="/">
                    <img
                        src={logoMain}
                        alt="logo-main"
                        style={{ width: "103px" }}
                    />
                </Link>
            </Row>
            <Row className="justify-content-center">
                <Form
                    className="border border-1 py-2 px-3 "
                    style={{ maxWidth: "80%" }}
                >
                    <h3 className="mb-3 text-center">Create account</h3>
                    <Form.Group>
                        <Form.Label htmlFor="name">Your Name</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            placeholder="First and last name"
                            value={userData.name}
                            onChange={(e) => handleChange(e)}
                        />
                        <div className="text-danger mb-2">
                            {errors.nameError}
                        </div>
                    </Form.Group>
                    {/* /////////////////////////////////////////////// */}
                    <Form.Group>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control
                            type="text"
                            id="email"
                            placeholder="example@ex.com"
                            value={userData.email}
                            onChange={(e) => handleChange(e)}
                        />
                        <div className="text-danger mb-2">
                            {errors.emailError}
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="phone">phone</Form.Label>
                        <Form.Control
                            type="text"
                            id="phone"
                            placeholder="01xxxxxxxxx"
                            value={userData.phone}
                            onChange={(e) => handleChange(e)}
                        />
                        <div className="text-danger mb-2">
                            {errors.phoneError}
                        </div>
                    </Form.Group>
                    {/* ////////////////////////////////////////////////////////// */}
                    <Form.Group>
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control
                            type={isRevealedPassword ? "text" : "password"}
                            id="password"
                            placeholder="Password"
                            value={userData.password}
                            onChange={(e) => handleChange(e)}
                        />
                        <Form.Text className="text-dark">
                            <div
                                className="passwordToggle"
                                variant="outline-dark"
                                onClick={() =>
                                    setIsRevealedPassword(!isRevealedPassword)
                                }
                            >
                                {isRevealedPassword ? <BiHide /> : <BiShow />}
                            </div>
                        </Form.Text>
                        <div className="text-danger mb-2">
                            {errors.passwordError}
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="confirm_password">
                            Confirm password
                        </Form.Label>
                        <Form.Control
                            type="password"
                            id="confirm_password"
                            placeholder=" Confirm Password"
                            value={userData.confirm_password}
                            onChange={(e) => handleChange(e)}
                        />
                        <div className="text-danger mb-2">
                            {errors.confirmPasswordError}
                        </div>
                    </Form.Group>
                    <Button
                        className="form-btn"
                        style={{
                            background: "#f0c14b",
                            borderColor: "#a88734 #9c7e31 #846a29",
                            marginTop: "20px",
                        }}
                        type="submit"
                        value="Register"
                        onClick={registeer}
                    >
                        Register
                    </Button>
                    {apierror && (
                        <div className="text-danger"> there is an error !</div>
                    )}
                    <Col className="m-3 text-center">
                        <span>Already have an account? </span>
                        <Link to="/login">
                            <Button
                                className="form-btn"
                                style={{
                                    width: "fit-content",
                                    background: "#e7e9ec",
                                    borderColor: "#adb1b8 #a2a6ac #8d9096",
                                }}
                            >
                                Sign-in
                            </Button>
                        </Link>
                    </Col>
                </Form>
            </Row>
        </Container>
    );
}
