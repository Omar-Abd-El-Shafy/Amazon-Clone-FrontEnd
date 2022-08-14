import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../Components/Loading/Loading';
import ListGroup from 'react-bootstrap/ListGroup';
import { Helmet } from 'react-helmet-async';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UpdateName from '../Components/user/UpdateName';
import Error from '../Components/Error/Error';
function Profile() {
  // const token = useSelector((state) => state.user.loggedInUser.token);
  const user = useSelector((state) => state.user.loggedInUser.user);
  const { loading, error } = useSelector((state) => state.user);
  console.log(user);
  const [name, setName] = useState('');
  // const updateHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(userSliceActions.update({ name }));
  // };
if (loading) {
  return (
    <div>
      <Loading />
    </div>
  );
}
if (error) {
  return (
    <div>
      <Error error={error.message} />
    </div>
  );
}

  return (
    <Container style={{ maxWidth: '600px' }}>
      
        <>
          <Helmet>{user.name}</Helmet>

          <h1 className="my-3">hello {user.name} </h1>
          <ListGroup className="border border-4 rounded-5">
            <ListGroup.Item className="d-flex justify-content-between border border-1">
              <ListGroup.Item style={{ border: 'none' }}>
                user name : {user.name}
              </ListGroup.Item>{' '}
              <Link to={'/UpdateName'}>
                <Button className="btn btn-outline-light border-0 bg-warning">
                  {' '}
                  Editt
                </Button>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <ListGroup.Item style={{ border: 'none' }}>
                your email : {user.email}
              </ListGroup.Item>{' '}
              <Link to={'/UpdateEmail'}>
                <Button className="btn btn-outline-light border-0 bg-warning">
                  {' '}
                  Editt
                </Button>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <ListGroup.Item style={{ border: 'none' }}>
                your phone : {user.phone}
              </ListGroup.Item>{' '}
              <Link to={'/UpdatePhone'}>
                <Button className="btn btn-outline-light border-0 bg-warning">
                  {' '}
                  Editt
                </Button>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <ListGroup.Item style={{ border: 'none' }}>
                password :{' '}
                <input
                  className="border-0"
                  type="password"
                  disabled
                  value={user.password}
                ></input>
              </ListGroup.Item>
              <Button className="btn btn-outline-light border-0 bg-warning">
                {' '}
                Editt
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </>
     
    </Container>
  );
}

export default Profile;
