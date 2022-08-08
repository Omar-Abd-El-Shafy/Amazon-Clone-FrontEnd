import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react';
import { IoSendOutline } from 'react-icons/io5';
import { Helmet } from 'react-helmet-async';
import { Button, Container, Form, InputGroup, Row } from 'react-bootstrap';

export default function Profile() {
  // props.funcNav(false);
    // const dispath = useDispatch()
    const [name,setName]=useState()
    const [email, setEmail] = useState();
    const [pass,setPass]=useState()
  return (
    <Container style={{ maxWidth: '600px' }}>
      <Helmet>user Profile</Helmet>
      <h1 className="my-3"> User Profile</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="mb-1 w-50 m-auto">Name</Form.Label>
          <InputGroup>
            <Form.Control
              placeholder="user name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="warning" id="button-addon2">
              <IoSendOutline />
            </Button>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="mb-1 w-50 m-auto">email</Form.Label>
          <InputGroup>
            <Form.Control
              placeholder="email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="warning" id="button-addon2">
              <IoSendOutline />
            </Button>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="mb-1 w-50 m-auto">password</Form.Label>
          <InputGroup>
            <Form.Control
              placeholder="password"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="warning" id="button-addon2">
              <IoSendOutline />
            </Button>
          </InputGroup>
              </Form.Group>
              <Button type='submit' className='mb-3 bg-warning text-black border-0 ' >Update</Button>
      </Form>
    </Container>
  );
}
