import React from 'react';

import { userSliceActions } from '../../Redux/userSlice';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoSendOutline } from 'react-icons/io5';
import { Helmet } from 'react-helmet-async';
import { Button, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const UpdatePhone = () => {
  const [phone, setphone] = useState('');
 const token = useSelector((state) => state.user.loggedInUser?.token);
 const userinfo = useSelector((state) => state.user.loggedInUser);
 const navigate = useNavigate();
 if (!userinfo) {
   navigate('/login');
 }
 const { user } = userinfo;
  const dispatch = useDispatch();
  
 const updateHandler = (e) => {
   e.preventDefault();
   dispatch(userSliceActions.updateUser({ phone, token }));
 };

  return (
    <Container style={{ maxWidth: '600px' }}>
      <Row>
        <Link to={'/profile'}>
          <h1>
            back to your account {'  '}
            <RiArrowGoBackFill />
          </h1>
        </Link>
        <hr />
      </Row>
      <Form>
        <Helmet>
          <title>Edit profoil information </title>
        </Helmet>

        <h4 className="text-dark"> Change your name</h4>
        <Form.Text className="text-muted">
          If you want to change the phone associated with your Amazon customer
          account, you may do so below. Be sure to click the Save Changes button
          when you are done.
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>user phone</Form.Label>
          <Form.Control
            type="number"
            placeholder={user.phone}
            onChange={(e) => setphone(e.target.value)}
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
export default UpdatePhone;

