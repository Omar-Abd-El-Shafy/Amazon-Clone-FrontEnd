import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/amazon_logo.png';
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container
      fluid
      style={{ maxWidth: '100%' }}
      className="bg-dark text-white align-item-center justify-content-center"
    >
      <Row
        className="align-item-center justify-content-around ;
    "
      >
        <Col>
          <Link to="/">
            <img
              style={{ width: '120px' }}
              className="p-3"
              src={logo}
              alt={logo}
            />
          </Link>
        </Col>
        <Col style={{ marginTop: '1rem' }}>
          <Link className="text-white" to={'/About'}>
            about
          </Link>
        </Col>
        <Col style={{ marginTop: '1rem' }}>
          Social
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
