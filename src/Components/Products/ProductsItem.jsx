import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Rating from '../Rating/Rating';
import { addToCart } from '../../Redux/cartSlice';
import { useDispatch } from 'react-redux';
const ProductsItem = ( {product} ) =>
{
    console.log(product.rating);
    console.log(product);
     const dispatch = useDispatch();
     const handleAddToCart = (product) => {
       dispatch(addToCart(product));
     };
  return (
    <Col sm={6} md={4} lg={3} className="mb-3 ">
      <Card
        className="shadow border-0 rounded-5 bg-warning bg-opacity-10"
        style={{ height: '100%' }}
      >
        <Link to={`/product/${product.id}`}>
          <img
            className="card-img-top"
            src={product.image}
            alt={product.title}
          />
        </Link>
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
          <Link to={`/product/${product.id}`}>
            <Card.Title>{product.title}</Card.Title>
            <Card.Title>{product.title}</Card.Title>
          </Link>
          <Rating rating={product.rating.rate} Reviews={product.rating.count} />
          <Card.Text
            style={{
              fontSize: '28px',
              fontWeight: '400',
            }}
          >
            ${product.price}
          </Card.Text>
          {product.rating.count > 0 ? (
            <Button variant="warning" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductsItem