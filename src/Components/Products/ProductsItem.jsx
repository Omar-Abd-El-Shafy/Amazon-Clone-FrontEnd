import React from "react";
import { addToCart } from "../../Redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Rating from "../Rating/Rating";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useAddToCartMutation } from "../../Redux/Api";
import Reviews from "../Reviews/Reviews";

const ProductsItem = ({ product }) => {
  // console.log(product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  
  //addProduct
  const [addToCart] = useAddToCartMutation();
  const loggedInUser = useSelector((state) => state.user?.loggedInUser);
  let Qty = 1;
  const handleAddToCart = (product) => {
    if (loggedInUser) {
      addToCart({
        token: loggedInUser.token,
        body: {
          product_id: product._id,
          flag: 1
        },
      })
      // addProduct({
      //   token: loggedInUser.token,
      //   body: { quantity: Qty + 1, product_id: product._id },
      // });
      // dispatch(addToCart(product));
    } else {
      navigate('/login');
    }
  };

  return (
    <Col sm={6} md={4} lg={3} className="mb-3 ">
      <Card
        className="shadow border-0 rounded-5 bg-warning bg-opacity-10"
        style={{ height: '100%' }}
      >
        <Link to={`/product/one/${product._id}`}>
          <Card.Img
            className="card-img-top p-3"
            src={product.image_path[0]}
            alt={product.name}
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
          <Link to={`/product/one/${product._id}`}>
            <Card.Title>{product.name}</Card.Title>
            {/* <span className="text-secondary">{product.category.name}</span> */}
          </Link>
          <Rating rating={product.rating} />
          {/* <Reviews Reviews={product.rating} /> */}
          <Card.Text
            style={{
              fontSize: '28px',
              fontWeight: '400',
            }}
          >
            EGP {product.price}
          </Card.Text>
          {product.stock > 0 ? (
            <Button variant="warning" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </Button>
          ) : (
            <Button disabled variant="secondary">
              out of stock
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductsItem;
