import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Rating from '../Rating/Rating';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useAddToCartMutation } from '../../Redux/Api';
import { toast } from 'react-toastify';
import CardGroup from 'react-bootstrap/CardGroup';

const ProductsItem = ({ product }) => {
  const navigate = useNavigate();
  // console.log(product)
  //addProduct
  const [addToCart] = useAddToCartMutation();
  const loggedInUser = useSelector((state) => state.user?.loggedInUser);
  const handleAddToCart = (product) => {
    if (loggedInUser) {
      addToCart({
        token: loggedInUser.token,
        body: {
          product_id: product._id,
          flag: 1,
        },
      });
      toast.success(`  ${product.name} add to cart`, {});
    } else {
      navigate('/login');
    }
  };

  return (
    <Col sm={6} md={4} lg={3} className="mb-3 ">
      <CardGroup>
        <Card
          className="w-100 shadow border-0 rounded-3 bg-warning bg-opacity-10"
          style={{ height: '500px' }}
        >
          <Row>
            <Link to={`/product/one/${product._id}`}>
              <Card.Img
                style={{ height: '200px' }}
                className="card-img-top p-2 "
                src={product.image_path[0]}
                alt={product.name}
              />
            </Link>
          </Row>

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
            <Row>
              <Link to={`/product/one/${product._id}`}>
                <Card.Title
                // style={ { width: '210px' } }
                >
                  {product.name}
                </Card.Title>
              </Link>
            </Row>
            <Row>
              <Rating rating={product.rating} />

              <Card.Text
                style={{
                  fontSize: '28px',
                  fontWeight: '400',
                }}
              >
                EGP {product.price}
              </Card.Text>
            </Row>
            {/* <Card.Footer> */}
            {loggedInUser?.user?.role === true ? (
              <h3 className=" text-secondary ">
                category: {product.category.name}
              </h3>
            ) : (
              <>
                {product.stock > 0 ? (
                  <Button
                    className="shadow bg-warning bg-gradient"
                    variant="flush"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                ) : (
                  <Button disabled variant="shadow bg-gradien secondary">
                    out of stock
                  </Button>
                )}
              </>
            )}
            {/* </Card.Footer> */}
          </Card.Body>
        </Card>
      </CardGroup>
    </Col>
  );
};

export default ProductsItem;
