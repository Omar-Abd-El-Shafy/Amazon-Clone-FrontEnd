import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/amazon_logo.png';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div
      style={{ maxWidth: '100%' }}
      className="bg-dark d-flex  justify-between text-white"
    >
      <Row
        className="align-item-center w-100  align-items-center;
    "
      >
        <Col>
          <Link to="/">
            <img
              style={{ width: '120px', marginLeft: '5rem' }}
              className="p-3"
              src={logo}
              alt={logo}
            />
          </Link>
        </Col>
        <Col style={{ marginTop: '14px' }}>
          <Link className='text-white' to={'/About'}>about</Link>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
