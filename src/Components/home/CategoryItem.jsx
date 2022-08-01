import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CategoryItem = ({ item }) => {
  return (
    <Col sm={6} md={4} lg={3} className="mb-3 ">
      <Card
        className="shadow border-0 rounded-3 bg-info bg-opacity-10"
        style={{ height: '100%' }}
      >
        <Card.Body
          style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              textAlign: 'center',
              borderRadius: '18px',
            }}
            >
          <Card.Title className="fw-bold text-capitalize">
            {item.Title}
          </Card.Title>
          <Card.Img
            variant="top"
            src={item.Img}
            style={{ height: '18rem', width: '100%', objectFit: 'cover' }}
          />
        </Card.Body>
        <Link className="btn " to={`/products/category/${item.Title}`}>
          <small className="text-primary fs-6 cat-btn">show more </small>
        </Link>
      </Card>
    </Col>
  );
};

export default CategoryItem;
