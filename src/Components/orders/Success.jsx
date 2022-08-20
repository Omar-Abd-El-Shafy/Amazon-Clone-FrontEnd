import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <Container>
      <div>
        <div>
          <h1>Your payment succeeded</h1>
          <Link to="/">
            <h4>direct to </h4>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Success;
