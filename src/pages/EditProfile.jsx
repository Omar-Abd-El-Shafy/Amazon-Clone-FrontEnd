import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../Components/Loading/Loading';
import ListGroup from 'react-bootstrap/ListGroup';
import { Helmet } from 'react-helmet-async';
import { Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import UpdateName from '../Components/user/UpdateName';
import Error from '../Components/Error/Error';
function EditProfile() {
  const navigate = useNavigate();
  const userinfo = useSelector((state) => state.user.loggedInUser);
  if (!userinfo) {
    navigate('/login');
  }
  const { user } = userinfo;
  return (
    <Container style={{ maxWidth: '600px', textTransform: 'initial' }}>
      <>
        <Helmet>{user.name}</Helmet>

        <h1 className="my-3">Hi  {user.name} </h1>
        <ListGroup className="border border-4 rounded-5">
          <ListGroup.Item className="d-flex justify-content-between border border-1">
            <ListGroup.Item style={{ border: 'none' }}>
              user name : {user.name}
            </ListGroup.Item>{' '}
            <Link to={'/UpdateName'}>
              <Button className="btn btn-outline-light border-0 bg-warning">
                Edit
              </Button>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            <ListGroup.Item style={{ border: 'none' }}>
              your email : {user.email}
            </ListGroup.Item>
            <Link to={'/UpdateEmail'}>
              <Button className="btn btn-outline-light border-0 bg-warning">
                Edit
              </Button>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            <ListGroup.Item style={{ border: 'none' }}>
              your phone : {user.phone}
            </ListGroup.Item>{' '}
            <Link to={'/UpdatePhone'}>
              <Button className="btn btn-outline-light border-0 bg-warning">
                Edit
              </Button>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            <ListGroup.Item style={{ border: 'none' }}>
              password :{' '}
              <input
                className="border-0 text-black"
                type="password"
                disabled
                value={'password'}
              ></input>
            </ListGroup.Item>
            <Link to={'/Updatepass'}>
              <Button className="btn btn-outline-light border-0 bg-warning">
                Edit
              </Button>
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </>
    </Container>
  );
}

export default EditProfile;
