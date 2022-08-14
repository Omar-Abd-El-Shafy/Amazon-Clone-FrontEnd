import React from 'react';

import { userSliceActions } from '../../Redux/userSlice';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoSendOutline } from 'react-icons/io5';
import { Helmet } from 'react-helmet-async';
import { Button, Container, Form, InputGroup, Row } from 'react-bootstrap';

const UpdateEmail = () => {
  const user = useSelector((state) => state.user.loggedInUser.user.email);
  //   const token = useSelector((state) => state.user.loggedInUser.token);
  //   const { loading, error } = useSelector((state) => state.user);
  //   console.log(token);
    console.log(user);
  // props.funcNav(false);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [pass, setPass] = useState('');
  console.log(email);
  const updateHandler = (e) => {
    e.preventDefault();
    // dispatch(userSliceActions.update({ name }));
  };

  return (
    <Container style={{ maxWidth: '600px' }}>
      <Form>
        <Helmet><title>Edit profoil information </title></Helmet>
        <h4 className="text-dark"> Change your email</h4>
        <Form.Text className="text-muted">
          If you want to change the name associated with your Amazon customer
          account, you may do so below. Be sure to click the Save Changes button
          when you are done.
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>user email</Form.Label>
          <Form.Control
            type="email"
            placeholder={user}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            onClick={updateHandler}
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
export default UpdateEmail;
{
  /*<Container style={{ maxWidth: '600px' }}>
      {loading ? (
        <Loading />
      ) : error ? (
        error.message
      ) : (
        <>
          <Helmet>{user.name}</Helmet>
          <h1 className="my-3">hello {user.name}</h1>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="mb-1 w-50 m-auto">Name</Form.Label>
              <InputGroup onChange={(e) => setName(e.target.value)}>
                <Form.Control
                  placeholder={user.name}
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="warning" id="button-addon2">
                  Edit
                </Button>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="mb-1 w-50 m-auto">email</Form.Label>
              <InputGroup onChange={(e) => setEmail(e.target.value)}>
                <Form.Control
                  placeholder={user.email}
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="warning" id="button-addon2">
                  Edit
                </Button>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="mb-1 w-50 m-auto">password</Form.Label>
              <InputGroup>
                <Form.Control
                  placeholder="New Password"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="warning" id="button-addon2">
                  Edit
                </Button>
              </InputGroup>
            </Form.Group>
            <Button
              onClick={updateHandler}
              type="submit"
              className="mb-3 bg-warning text-black border-0 "
            >
              Update
            </Button>
          </Form>
        </>
      )}
    </Container>*/
}
