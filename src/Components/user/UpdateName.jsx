import React from 'react';

import { userSliceActions } from '../../Redux/userSlice';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoSendOutline } from 'react-icons/io5';
import { Helmet } from 'react-helmet-async';
import { Button, Container, Form, InputGroup, Row } from 'react-bootstrap';

const UpdateName = () => {
  const user = useSelector((state) => state.user.loggedInUser.user.name);
//   const token = useSelector((state) => state.user.loggedInUser.token);
//   const { loading, error } = useSelector((state) => state.user);
//   console.log(token);
  // props.funcNav(false);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
  console.log(name);
  const updateHandler = (e) => {
    e.preventDefault();
    // dispatch(userSliceActions.update({ name }));
  };

  return (
    <Container style={{ maxWidth: '600px' }}>
      <Form>
        <h4 className="text-dark"> Change your name</h4>
        <Form.Text className="text-muted">
          If you want to change the name associated with your Amazon customer
          account, you may do so below. Be sure to click the Save Changes button
          when you are done.
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>user Name</Form.Label>
          <Form.Control
            type="email"
            placeholder={user}
            onChange={(e) => setName(e.target.value)}
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

export default UpdateName;