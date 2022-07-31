import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { useGetAllCategoriesQuery } from '../../Redux/prodactsApi.js';
const Categorier = () => {
  const {
    data: Category,
    error,
    isLoading: loading,
  } = useGetAllCategoriesQuery();
  console.log(Category);
  const [catg, setcatg] = useState([]);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then((res) => setcatg(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Row className="mt-4" style={{ marginRight: '0', marginLeft: ' 0' }}>
        {catg.map((item) => (
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
                  {item}
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={item}
                  style={{ height: '18rem', width: '100%', objectFit: 'cover' }}
                />
              </Card.Body>
              <Link className="btn " to={`/products/category/${item}`}>
                <small className="text-primary fs-6 cat-btn">show more </small>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Categorier;
