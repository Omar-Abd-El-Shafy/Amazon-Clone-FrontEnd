import React, { useReducer, useEffect } from 'react';
import reducer from '../network/FecthingData';
import axiosInstance from '../network/axiosInstansce';
import logger from 'use-reducer-logger';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from '../Components/Rating';

function Home() {
  const [{data:products, loading, error }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  useEffect(() => {

      axiosInstance
      .get('/products')
      .then((res) => {
        console.log(res);
        dispatch({ type: 'FETCH-REQUEST' });
        dispatch({ type: 'FETCH-SUCESS', payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: 'FEACH-FALE', payload: err.message });
      });
  }, []);

  return (
    <>
      <h1>Feather Products</h1>
      <div className="products">
        {loading ? (
          <div>loading...</div>
        ) : error ? (
          <div> {error}</div>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.id} sm={6} md={4} lg={3} className="mb-3 ">
                <Card>
                  <Link to={`/product/${product.id}`}>
                    <img
                      style={{}}
                      className="card-img-top"
                      src={product.image}
                      alt={product.title}
                    />
                  </Link>
                  <Card.Body>
                    <Link to={`/product/${product.id}`}>
                      <Card.Title>{product.title}</Card.Title>
                    </Link>
                    <Rating
                      rating={product.rating.rate}
                      Reviews={product.rating.count}
                    />
                    <Card.Text>
                      <strong>${product.price}</strong>
                    </Card.Text>
                    <Button
                      className="bg-warning text-dark"
                      style={{ border: 'none', fontSize: '20px' }}
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </>
  );
}

export default Home;
