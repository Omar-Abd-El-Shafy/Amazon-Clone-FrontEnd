import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/amazon_logo.png';
const Footer = () => {
  return (
    <Row className="bg-dark d-flex items-start justify-between text-start">
      <Col>
        <Link to="/">
          <img
            style={{ width: '120px',marginLeft:'5rem' }}
            className="p-3"
            src={logo}
            alt={logo}
          />
        </Link>
      </Col>
    </Row>
  );
};

export default Footer;
