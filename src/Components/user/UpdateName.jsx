import React from "react";

import { userSliceActions } from "../../Redux/userSlice";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Helmet } from "react-helmet-async";
import { Button, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const UpdateName = () => {
  const token = useSelector((state) => state.user.loggedInUser?.token);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    console.log("hh");
    e.preventDefault();
    dispatch(userSliceActions.updateUser({ name, token }));
  };
  return (
    <Container style={{ maxWidth: "600px" }}>
      <Row>
        <Link to={"/profile"}>
          <h1>
            back to your account {"  "}
            <RiArrowGoBackFill />
          </h1>
        </Link>
        <hr />
      </Row>
      <Form>
        <Helmet>
          <title>Edit profile information </title>
        </Helmet>

        <h4 className="text-dark"> Change your name</h4>
        <Form.Text className="text-muted">
          If you want to change the name associated with your Amazon customer
          account, you may do so below. Be sure to click the Save Changes button
          when you are done.
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>user Name</Form.Label>
          <Form.Control
            type="text"
            // placeholder={user}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            onClick={handleSubmit}
            className="mt-2 "
            variant="warning"
            type="submit"
          >
            Save changes
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default UpdateName;
